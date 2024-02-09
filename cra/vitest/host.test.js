import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../host/src/Form';

describe('Form', () => {
  it('permet à l\'utilisateur de remplir et de soumettre le formulaire', async () => {
    const user = userEvent.setup();
    render(<Form />);
    
    await user.type(screen.getByLabelText(/Nom/i), 'John Doe');
    await user.type(screen.getByLabelText(/Email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/Message/i), 'Ceci est un message de test.');

    const consoleSpy = vi.spyOn(console, 'log');

    fireEvent.submit(screen.getByRole('button', { name: /Envoyer/i }));
    
    expect(consoleSpy).toHaveBeenCalledWith('Envoi du formulaire avec :', { name: 'John Doe', email: 'john@example.com', message: 'Ceci est un message de test.' });

    consoleSpy.mockRestore();
  });
});
