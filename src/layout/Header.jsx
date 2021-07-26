import React from 'react';
import movie from '../assets/icons/video.svg';

const Header = props => {

    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <figure>
                        <img className="brand-logo" src={movie} alt="React Movie App"/>
                        <figcaption className="title">
                            React Movie App
                        </figcaption>
                    </figure>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><button >Repo</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    );

};

export default Header;