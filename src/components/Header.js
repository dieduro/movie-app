import React from 'react';
import '../App.css';
import Searchbar from './Searchbar';


function Header(props) {

        function onInputChange(e) {
                props.onInputChange(e)
        }
        return (
        <header className="header app-margins">
                <h1 className="title">Movies List</h1>
                <Searchbar onInputChange={onInputChange} inputValue={props.inputValue}/>
          </header>
        );
}

export default Header;
