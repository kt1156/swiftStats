# 🎶 SwiftStats: Taylor Swift Song Explorer

**SwiftStats** is a full-stack web app built with Spring Boot and JavaScript that visualises data from Taylor Swift’s discography. Inspired by the release of her latest album, this project dives into track-level analytics like *danceability*, *energy*, and *valence* using a curated dataset from Kaggle.

## 💡 Why I Built This

I wanted to learn Spring Boot and explore Java development beyond my usual Python projects. With Taylor Swift’s new album dropping just days ago, I thought—why not build something fun and data-driven around her music? I initially tried using the Spotify API, but some audio feature endpoints were deprecated, so I used to a [Kaggle dataset](https://www.kaggle.com/datasets/jarredpriester/taylor-swift-spotify-dataset/data) that includes rich metadata for her tracks.

## 🛠️ Tech Stack

| Language     | Usage         |
|--------------|---------------|
| JavaScript   | Frontend UI   |
| Java         | Backend (Spring Boot) |
| Python       | Data preprocessing |
| CSS / HTML   | Styling and layout |

## 📊 Features

- Fetches and displays albums and tracks from the dataset
- Visualises audio features like:
  - **Danceability**
  - **Energy**
  - **Valence**
  - **Acousticness**
- Uses local storage to track app routing and user interactions
- Responsive UI with dynamic data rendering

## 📁 Data Source

- [Taylor Swift Spotify Dataset on Kaggle](https://www.kaggle.com/datasets/jarredpriester/taylor-swift-spotify-dataset/data)

## 📸 Demo
![Backend](https://github.com/user-attachments/assets/10be3938-83de-4e68-a5c5-66998a873620)

![Initial UI](https://github.com/user-attachments/assets/18cb5618-be5d-43ed-a662-19cf785501fe/Screenshot%202025-10-07%20195747.png)
![Stats Page](https://github.com/user-attachments/assets/a73f3f93-3f98-4ee4-ac18-307223d46749/Screenshot%202025-10-07%20185155.png)
![Album View](https://github.com/user-attachments/assets/26f89e70-4b07-4efe-9b3c-b08d7d688f1d/Screenshot%202025-10-07%20185138.png)

## 🚀 What I Learned

- How to set up and structure a Spring Boot backend
- Integrating Java with a modern JavaScript frontend
- Handling CSV data and building RESTful endpoints
- Managing Git submodules (accidentally!) and cleaning up repo structure

