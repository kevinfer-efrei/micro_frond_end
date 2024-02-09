import React, { useState } from 'react';
 
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
 
    const handleSubmit = (event) => {
        event.preventDefault();
 
        console.log('Envoi du formulaire avec :', { name, email, message });
 
    };
 
    return (
        <form onSubmit={handleSubmit}>
        <h2>Contactez-nous</h2>
        <label htmlFor="name">Nom :</label>
        <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
        
                    <label htmlFor="email">Email :</label>
        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
        
                    <label htmlFor="message">Message :</label>
        <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
        
                    <button type="submit">Envoyer</button>
        </form>
    );
}
 
export default Form;