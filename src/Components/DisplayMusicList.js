import React from 'react';
// import { map } from 

const DisplayMusicList = (item) => {
    return (
        <div className="display-item">
            <img className="music-icon" src={item.props.artworkUrl100} alt={item.props.artistName} />
            <div className="display-details">
                <span className="collection-name">{item.props.collectionName}</span>
                <a className="more-details" href={item.props.collectionViewUrl}>More</a>
            </div>
        </div>
    )
};

export default DisplayMusicList;