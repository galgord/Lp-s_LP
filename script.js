class MusicPlayer {
    constructor() {
        this.songs = [
            { title: 'Good Vibes Only', file: 'music/Good Vibes Only.mp3' },
            { title: 'Magic on the Launch', file: 'music/Magic on the Launch.mp3' },
            { title: 'One Team, One Groove', file: 'music/One Team, One Groove.mp3' },
            { title: 'Revenue Hours', file: 'music/Revenue Hours.mp3' },
            { title: 'Zachs Midwest Heart', file: 'music/Zachs Midwest Heart.mp3' }
        ];
        this.currentSongIndex = 0;
        this.isPlaying = false;
        this.audio = new Audio();
        this.initializePlayer();
    }

    initializePlayer() {
        // DOM elements
        this.playBtn = document.getElementById('playBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSongElement = document.getElementById('currentSong');
        this.songList = document.getElementById('songList');
        this.record = document.getElementById('record');

        // Event listeners
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.previousSong());
        this.nextBtn.addEventListener('click', () => this.nextSong());
        this.audio.addEventListener('ended', () => this.nextSong());

        // Initialize playlist
        this.renderPlaylist();
        this.loadSong(0);

        // Audio events
        this.audio.addEventListener('play', () => {
            this.record.classList.add('spinning');
            this.playBtn.textContent = 'Pause';
        });

        this.audio.addEventListener('pause', () => {
            this.record.classList.remove('spinning');
            this.playBtn.textContent = 'Play';
        });
    }

    renderPlaylist() {
        this.songList.innerHTML = '';
        this.songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = song.title;
            li.addEventListener('click', () => this.loadSong(index));
            this.songList.appendChild(li);
        });
    }

    loadSong(index) {
        if (index < 0) index = this.songs.length - 1;
        if (index >= this.songs.length) index = 0;

        this.currentSongIndex = index;
        this.audio.src = this.songs[index].file;
        this.currentSongElement.textContent = this.songs[index].title;
        
        // Update playlist highlighting
        const playlistItems = this.songList.getElementsByTagName('li');
        Array.from(playlistItems).forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        if (this.isPlaying) {
            this.audio.play();
        }
    }

    togglePlay() {
        if (this.audio.paused) {
            this.audio.play();
            this.isPlaying = true;
        } else {
            this.audio.pause();
            this.isPlaying = false;
        }
    }

    previousSong() {
        this.loadSong(this.currentSongIndex - 1);
    }

    nextSong() {
        this.loadSong(this.currentSongIndex + 1);
    }
}

// Initialize the music player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
}); 