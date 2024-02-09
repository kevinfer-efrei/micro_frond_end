import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@vitejs/plugin-react';
import RemoteLandingPage from '../remote/src/LandingPage'; 

describe('LandingPage', () => {
  it('appelle onSearch avec la valeur entrée', async () => {
    const handleSearchMock = vi.fn();
    render(<RemoteLandingPage onSearch={handleSearchMock} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Pikachu' } });
    fireEvent.submit(screen.getByRole('button'));

    expect(handleSearchMock).toHaveBeenCalledWith('Pikachu');
  });
});
