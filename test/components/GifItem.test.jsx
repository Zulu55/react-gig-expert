import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {
    
    const title = 'Saitama';
    const url = 'https://test.com/saitama.jpg';
    
    test('debe hacer match con el snapshop', () => {
        const { container } = render(<GifItem title={ title } url= { url }/>);
        expect(container).toMatchSnapshot();
    }) 
    
    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={ title } url= { url }/>);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    }) 
    
    test('debe mostrar el título en el componente', () => {
        render(<GifItem title={ title } url= { url }/>);
        expect(screen.getByText(title)).toBeTruthy();;
    }) 
});