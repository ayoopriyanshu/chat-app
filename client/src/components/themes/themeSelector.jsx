import { useEffect, useState } from "react"

const wallpapers = [
    { name: 'Gaming', url: 'themes/retro_gaming_room-wallpaper-3840x2160.jpg' },
    { name: 'Shark', url: 'themes/great_white_shark_painting-wallpaper-1920x1080.jpg' },
    { name: 'Storm', url: 'themes/rise_of_the_ronin_2024_video_game-wallpaper-5120x2880.jpg' },
    { name: 'Weeknd', url: 'themes/the_weeknd_the_highlights-wallpaper-5120x2880.jpg' },
    { name: 'Abstract', url: 'themes/abstract_dark_background-wallpaper-5120x2880.jpg' }
    // Add more wallpapers as needed
]
const Themeselector = () => {
    const [selectedWallpaper, setSelectedWallpaper] = useState(localStorage.getItem("selectedWallpaper") || wallpapers[0].url)

    useEffect(() => {
        localStorage.setItem("selectedWallpaper", selectedWallpaper);
        document.documentElement.style.backgroundImage = `url(${selectedWallpaper})`;
        document.documentElement.style.backgroundSize = 'cover'
    }, [selectedWallpaper]);

    const handleSelect = (url) => {
        setSelectedWallpaper(url)
    }

    return (
        <details className="dropdown">
            <summary className="btn glass m-2 text-white font-mono font-semibold text-lg">THEMES</summary>
            <ul className="menu glass text-white dropdown-content rounded-xl z-[1] w-25 p-2  font-mono">
                {wallpapers.map((wallpaper) => (
                    <li key={wallpaper.url} >
                        <a
                            type="button"
                            onClick={() => {
                                handleSelect(wallpaper.url);
                            }}
                        >
                            {wallpaper.name}
                        </a>
                    </li>
                ))}
            </ul>
        </details>
    )
}

export default Themeselector