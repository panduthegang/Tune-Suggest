import React from "react";
import heart from '/images/heart.png';
import FavouritesList from './FavouritesList';
import Recommendations from './Recommendations';
import logo from '../assets/musician-svgrepo-com.png'

export default function Navbar({ favourites, songs, addToFavourites, removeFromFavourites, onSearchChange }) {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-img" />
                <h1 className="logo-name">TuneSuggest</h1>
            </div>
            <input 
                className="search-bar" 
                type="text" 
                placeholder="Search songs, artists..." 
                onChange={onSearchChange}
            />

            <div className="favourites-container">
                <img src={heart} alt="Favorites" className="heart-img" />
                <h3 className="favourites-text">Favourites</h3>
                <ul className="dropdown-menu favourites-dropdown">
                    <FavouritesList favourites={favourites} removeFromFavourites={removeFromFavourites} />
                </ul>
            </div>

            <div className="recommendation-container">
                <h3 className="recommendations-text">Recommendations</h3>
                <ul className="dropdown-menu recommendations-dropdown">
                    <Recommendations favourites={favourites} songs={songs} />
                </ul>
            </div>
        </nav>
    );
}
