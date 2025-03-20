import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <p>Ronesh is a producer and emcee originally from Des Plaines, IL, currently based in Northern California. As a child, he dabbled in piano, saxophone, and drums, before pivoting to beats and rhymes as a teen in the Chicago area's vibrant underground hip-hop scene. His soundscapes are rooted in traditional boom-bap, while incorporating elements of West Coast G-Funk, soul, jazz, rock, and electronic music.</p>

                <p style={{color: 'white'}}>Ronesh's most recent release, <a href="https://ronesh.bandcamp.com/album/lead-the-orchestra" target="_blank" rel="noopener noreferrer" style={{color: 'pink'}}> Lead the Orchestra</a>, is a 12-track album that dropped on April 16, 2024 via Filthe Records. This project showcases Ronesh's production prowess, featuring an impressive lineup of collaborators, including Open Mike Eagle, Ché Noir, Defcee, Psalm One, Angelenah, and many others.</p>

                <p className="italic">Press Play For Unreleased Music!</p>
                <audio controls>
                    <source src="../src/assets/sadRaps.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default Home;
