import React from 'react';

function Header({ title }) {
    return (
        <header>
            <h1>{ title }</h1> 
            <img src="../assets/logo.png" alt="Logo" />
        </header>
    );
}

export default Header;
