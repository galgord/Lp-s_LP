# Vinyl Record Player Website

A beautiful web-based vinyl record player that plays your music collection with a spinning record animation.

## Setup Instructions

1. Place your music files in the `music` directory and name them from `song1.mp3` to `song10.mp3`
2. Add your custom record label image as `record-label.png` in the root directory
3. Open `index.html` in a web browser to start playing your music

## Features

- Realistic spinning record animation that syncs with music playback
- Play/Pause, Previous, and Next track controls
- Interactive playlist
- Custom record label display
- Responsive design that works on all devices

## File Structure

```
.
├── index.html
├── styles.css
├── script.js
├── record-label.png
├── music/
│   ├── song1.mp3
│   ├── song2.mp3
│   └── ...
└── README.md
```

## Customization

- To change the record label image, replace `record-label.png` with your own image
- To modify the spinning animation speed, adjust the `animation: spin 2s linear infinite;` in `styles.css`
- To add or remove songs, modify the `songs` array in `script.js` 