package com.kt1156.swiftiess.swiftiess;
import org.springframework.web.bind.annotation.*;
import java.util.List;

// Handles web requests - endpoints like /tracks

@RestController
@RequestMapping("/tracks")
public class TrackController {

    private final TrackRepository trackRepo;

    public TrackController(TrackRepository trackRepo) {
        this.trackRepo = trackRepo;
    }

    @GetMapping("/albums")
    public List<String> getAllAlbums() {
        return trackRepo.findAll().stream()
        .map(Track::getAlbum)
        .distinct()
        .toList();
    }

    @GetMapping // maps HTTP GET requests to methods
    public List<Track> getAllTracks() {
        return trackRepo.findAll();
    }

    @GetMapping("/{id}")
    public Track getTrackById(@PathVariable String id) {
        return trackRepo.findById(id).orElse(null);
    }

        @GetMapping("/album/{album}")
    public List<Track> getTracksByAlbum(@PathVariable String album) {
        return trackRepo.findByAlbumIgnoreCase(album);
    }

    @GetMapping("/search")
    public List<Track> searchTracks(@RequestParam String name) {
        return trackRepo.findByNameContainingIgnoreCase(name);
    }

    @GetMapping("/top/danceable")
    public List<Track> getTopDanceableTracks() {
        return trackRepo.findTop5ByOrderByDanceabilityDesc();
    }

}
