import React from "react";
import logoImage from "../../assets/logo.png";

export default function Header({ onSongChange, handleSongChange }) {
    return (
        <header className="header">
            <div className="logo">
                <img className="logo--image" src={logoImage} alt="logo"></img>
            </div>
            <div className="search">
                <h1 className="search--title">iTunes api example</h1>
                <form onSubmit={onSongChange} className="search--form">
                    <input
                        className="search--form--input"
                        placeholder="Search songs.."
                        onChange={handleSongChange}
                    />
                    <button type="submit" className="search--form--button">
                        search
                    </button>
                </form>
                <h2 className="search--description">
                    Search by song title, author, song number, lyrics, catalog
                    or copyright owner
                </h2>
            </div>
        </header>
    );
}
