import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#f0f0f0',
        color: '#333',
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
    };

    return (
        <footer style={footerStyle}>
            <h6>ⓒ Paul & Kevin Consulting 2024 tous droits réservés</h6>
        </footer>
    );
}

export default Footer;