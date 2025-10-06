# NOTE: This section uses Spotify's audio-features endpoint,
# which is now deprecated and may not return data reliably.
# Left here to document the original approach.

import requests
import base64
import pandas as pd

client_id = "5f6007549c4b4aa2bc048f740245ed82"
client_secret = "ec2dc7a84c3444a2a8a11b2515b4f9f6"

# encode credentials
auth_str = f"{client_id}:{client_secret}"
b64_auth_str = base64.b64encode(auth_str.encode()).decode()

headers = {
    "Authorization": f"Basic {b64_auth_str}"
}
data = {
    "grant_type": "client_credentials"
}

token_url = "https://accounts.spotify.com/api/token"

# get access token
response = requests.post(token_url, headers=headers, data=data)

access_token = response.json()["access_token"]
print("Acccess Token:", access_token)

# use access token to get data

artist_id = "06HL4z0CvFAxyc27GXpf02" # Taylor Swift's Spotify ID
album_url = f"https://api.spotify.com/v1/artists/{artist_id}/albums"

all_albums = []
offset = 0

headers = {
    "Authorization": f"Bearer {access_token}"
}

while True:
    params = {
        "include_groups": "album",
        "limit": 50,
        "market": "GB",
        "offset": offset
    }

    response = requests.get(album_url, headers=headers, params=params)
    albums = response.json()["items"]

    if not albums:
        break
    
    for album in albums:
        all_albums.append({
            "name": album["name"],
            "id": album["id"],
            "release_date": album["release_date"]
        })
    
    offset += 50

# print album names, release dates, spotify IDs
track_data = []

for album in all_albums:
    print(f"{album['name']} ({album['release_date']}) -> {album['id']}")
    
    # for each album ID, fetch all tracks
    album_id = album['id']
    tracks_url = f"https://api.spotify.com/v1/albums/{album_id}/tracks"
    response = requests.get(tracks_url, headers=headers)
    tracks = response.json().get("items", []) # parse JSON response + extract item key + add to list
    
    # build metadata list for album
    album_tracks = []
    for track in tracks:
        album_tracks.append({
            "name": track["name"],
            "album": album["name"],
            "release_date": album["release_date"],
            "track_number": track["track_number"],
            "id": track["id"],
            "uri": track["uri"]
        })

    # get audio features for all tracks in current album
    track_ids = [t["id"] for t in album_tracks]
    if track_ids:  # avoid empty requests
        features_url = "https://api.spotify.com/v1/audio-features"
        params = {"ids": ",".join(track_ids)}
        features_response = requests.get(features_url, headers=headers, params=params)
        audio_features = features_response.json().get("audio_features", [])

        # Merge features into metadata
        for track, features in zip(album_tracks, audio_features):
            if features:  # skip if features are missing
                track.update({
                    "acousticness": features["acousticness"],
                    "danceability": features["danceability"],
                    "energy": features["energy"],
                    "instrumentalness": features["instrumentalness"],
                    "popularity": features["popularity"]
                })
    
    # add to master list
    track_data.extend(album_tracks)

# save to CSV
df = pd.DataFrame(track_data)
df.to_csv("taylor_swift_discography.csv", index=False)
print("Saved to CSV!")