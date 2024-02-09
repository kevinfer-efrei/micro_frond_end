import React, { useState } from 'react';
 
function ContactForm() {
    // État initial pour chaque champ du formulaire
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
 
    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
 
        // Ici, vous traiteriez les données du formulaire, par exemple, en envoyant à une API
        console.log('Envoi du formulaire avec :', { name, email, message });
 
        // Réinitialiser le formulaire ou gérer la suite ici
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
 
export default ContactForm;