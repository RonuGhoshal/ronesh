import './Music.css';

const albums = [
  { title: "Lead the Orchestra", image: "../src/assets/lead-the-orchestra.jpg", url: "https://ronesh.bandcamp.com/album/lead-the-orchestra" },
  { title: "Bleak Americana", image: "../src/assets/bleak-americana.jpg", url: "https://ronesh.bandcamp.com/album/bleak-americana" },
  { title: "Basilica", image: "../src/assets/basilica.jpg", url: "https://ronesh.bandcamp.com/album/basilica" },
  { title: "I Don't Talk To Ghosts (I'd Rather Sit And Listen)", image: "../src/assets/i-dont-talk-to-ghosts.jpg", url: "https://ronesh.bandcamp.com/album/i-dont-talk-to-ghosts-id-rather-sit-and-listen" },
  { title: "Life (Prelude To Decay)", image: "../src/assets/life-prelude-to-decay.jpg", url: "https://ronesh.bandcamp.com/album/life-prelude-to-decay" },
  { title: "Bonsai", image: "../src/assets/bonsai.jpg", url: "https://ronesh.bandcamp.com/album/bonsai" },
  { title: "Emergence", image: "../src/assets/emergence.jpg", url: "https://ronesh.bandcamp.com/album/emergence-2" },
  { title: "Ikarus Rising", image: "../src/assets/ikarus-rising.jpg", url: "https://ronesh.bandcamp.com/album/ikarus-rising" },
  { title: "Olive Branches", image: "../src/assets/olive-branches.jpg", url: "https://ronesh.bandcamp.com/album/olive-branches" },
  { title: "Stone Groove", image: "../src/assets/stone-groove.jpg", url: "https://ronesh.bandcamp.com/album/stone-groove" },
  { title: "Balance (Vol. 1)", image: "../src/assets/balance-v1.jpg", url: "https://ronesh.bandcamp.com/album/balance-vol-1" },
];

const Music = () => {
  return (
    <div className="music-grid">
      {albums.map((album) => (
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
