import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import SearchBar from './SearchBar';

const Header = props => {
        return ( 
            <div className="ui segment">
                <div class="ui menu">
                   {props.page === 'details' 
                   ? <div className="head">Movie Details </div>
                   :<SearchBar onTermSubmit={props.onTermSubmit} />} 
                    <div class="right item">
                        <div class="ui action">
                            <Link to="/" className="btn btn-success">
                                <i className="home icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default Header;