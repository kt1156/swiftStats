package com.kt1156.swiftiess.swiftiess;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


// Interface to query the database using Spring Data JPA
// Handles database queries automatically (extra queries like filtering, sorting, searching)

public interface TrackRepository extends JpaRepository<Track, String> {
    // Find tracks by album name (ignore lower/upper cases)
    List<Track> findByAlbumIgnoreCase(String album);

    // Search tracks by partial name match
    List<Track> findByNameContainingIgnoreCase(String name);

    // Top 5 tracks by danceability

    List<Track> findTop5ByOrderByDanceabilityDesc();
}