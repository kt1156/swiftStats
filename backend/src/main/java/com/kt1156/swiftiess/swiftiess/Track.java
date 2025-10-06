package com.kt1156.swiftiess.swiftiess;

// This class represents a row in tracks table - maps database to table in PostgreSQL

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "tracks") 
public class Track {
    @Id
    private String id;

    private String name;
    private String album;
    private LocalDate releaseDate;
    private int trackNumber;
    private String uri;
    private float acousticness;
    private float danceability;
    private float energy;
    private float instrumentalness;
    private float liveness;
    private float loudness;
    private float speechiness;
    private float tempo;
    private float valence;
    private int popularity;
    private int durationMs;

    // Getters and Setters
    public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getAlbum() {
            return album;
        }

        public void setAlbum(String album) {
            this.album = album;
        }

        public LocalDate getReleaseDate() {
            return releaseDate;
        }

        public void setReleaseDate(LocalDate releaseDate) {
            this.releaseDate = releaseDate;
        }

        public int getTrackNumber() {
            return trackNumber;
        }

        public void setTrackNumber(int trackNumber) {
            this.trackNumber = trackNumber;
        }

        public String getUri() {
            return uri;
        }

        public void setUri(String uri) {
            this.uri = uri;
        }

        public float getAcousticness() {
            return acousticness;
        }

        public void setAcousticness(float acousticness) {
            this.acousticness = acousticness;
        }

        public float getDanceability() {
            return danceability;
        }

        public void setDanceability(float danceability) {
            this.danceability = danceability;
        }

        public float getEnergy() {
            return energy;
        }

        public void setEnergy(float energy) {
            this.energy = energy;
        }

        public float getInstrumentalness() {
            return instrumentalness;
        }

        public void setInstrumentalness(float instrumentalness) {
            this.instrumentalness = instrumentalness;
        }

        public float getLiveness() {
            return liveness;
        }

        public void setLiveness(float liveness) {
            this.liveness = liveness;
        }

        public float getLoudness() {
            return loudness;
        }

        public void setLoudness(float loudness) {
            this.loudness = loudness;
        }

        public float getSpeechiness() {
            return speechiness;
        }

        public void setSpeechiness(float speechiness) {
            this.speechiness = speechiness;
        }

        public float getTempo() {
            return tempo;
        }

        public void setTempo(float tempo) {
            this.tempo = tempo;
        }

        public float getValence() {
            return valence;
        }

        public void setValence(float valence) {
            this.valence = valence;
        }

        public int getPopularity() {
            return popularity;
        }

        public void setPopularity(int popularity) {
            this.popularity = popularity;
        }

        public int getDurationMs() {
            return durationMs;
        }

        public void setDurationMs(int durationMs) {
            this.durationMs = durationMs;
        }
    }