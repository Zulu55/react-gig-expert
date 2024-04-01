import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de <GifGrid/>', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({ 
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('debe de mostrar items cuando se cargan las imágenes desde el useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc001',
                title: 'Saitama',
                url: 'https://test.com/saitama.jpg'
            },
            {
                id: 'abc002',
                title: 'Goku',
                url: 'https://test.com/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({ 
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});