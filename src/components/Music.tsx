import './Music.css';

const ALBUMS = [
  { title: "Lead the Orchestra", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/lead-the-orchestra.jpg", url: "https://ronesh.bandcamp.com/album/lead-the-orchestra" },
  { title: "Bleak Americana", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/bleak-americana.jpg", url: "https://ronesh.bandcamp.com/album/bleak-americana" },
  { title: "Basilica", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/basilica.jpg", url: "https://ronesh.bandcamp.com/album/basilica" },
  { title: "I Don't Talk To Ghosts (I'd Rather Sit And Listen)", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/i-dont-talk-to-ghosts.jpg", url: "https://ronesh.bandcamp.com/album/i-dont-talk-to-ghosts-id-rather-sit-and-listen" },
  { title: "Life (Prelude To Decay)", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/life-prelude-to-decay.jpg", url: "https://ronesh.bandcamp.com/album/life-prelude-to-decay" },
  { title: "Bonsai", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/bonsai.jpg", url: "https://ronesh.bandcamp.com/album/bonsai" },
  { title: "Emergence", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/emergence.jpg", url: "https://ronesh.bandcamp.com/album/emergence-2" },
  { title: "Ikarus Rising", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/ikarus-rising.jpg", url: "https://ronesh.bandcamp.com/album/ikarus-rising" },
  { title: "Olive Branches", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/olive-branches.jpg", url: "https://ronesh.bandcamp.com/album/olive-branches" },
  { title: "Stone Groove", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/stone-groove.jpg", url: "https://ronesh.bandcamp.com/album/stone-groove" },
  { title: "Balance (Vol. 1)", image: "https://cdn.jsdelivr.net/gh/ronughoshal/ronesh/src/assets/balance-v1.jpg", url: "https://ronesh.bandcamp.com/album/balance-vol-1" },
];

const Music = () => {
  return (
    <div className="music-grid">
      {ALBUMS.map((album) => (
        <div key={album.title} className="album">
          <a href={album.url} target="_blank" className="album-link">
            <img src={album.image} alt={album.title} className="album-cover" />
            <p className="album-title">{album.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Music;
