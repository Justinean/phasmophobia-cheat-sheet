import Link from '../link/Link';
import React from 'react';
import './navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    let links = false;

    const checkSize = () => {
        let linkEls = document.querySelectorAll(".navlink")
        linkEls.forEach(item => {
            item.classList.add("hidden");
            links = false;
        })
    }

    const showLinks = () => {
        let linkEls = document.querySelectorAll(".navlink")
        if (links) {
            linkEls.forEach(item => {
                item.classList.add("hidden")
            })
            links = false;
        } else {
            linkEls.forEach(item => {
                item.classList.remove("hidden")
            })
            links = true;
        }
    }

    window.onresize = checkSize;

    return (
        <div className="navbar">
            <h1>Phasmophobia cheatsheet</h1>
            <button className="linkButton" onClick={showLinks}><p>_</p><p>_</p><p>_</p></button>
            <br />
            <div className="navbarLinks">
                <Link currentPage={currentPage} handlePageChange={handlePageChange} displayName="Welcome" locationName="welcome" />
                
                <Link currentPage={currentPage} handlePageChange={handlePageChange} displayName="Ghost" locationName="ghost" />
                
                <Link currentPage={currentPage} handlePageChange={handlePageChange} displayName="Photos" locationName="photos" />
            </div>
        </div>
    )
}

export default Navbar;