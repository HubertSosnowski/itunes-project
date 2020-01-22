import React from "react";

export default function ResultBox({ songArtist, songName, songArtwork }) {
    return (
        <div className="result--box">
            <div className="result--box__col1">
                <img src={songArtwork} alt="Song" />
            </div>
            <div className="result--box__col2">
                <p className="result--box--title">{songName}</p>
                <div className="result--box--artist">
                    <span className="result--box--artist--by">By </span>
                    <span className="result--box--artist--name">
                        {songArtist}
                    </span>
                </div>
            </div>
        </div>
    );
}
