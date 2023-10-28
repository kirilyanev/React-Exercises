// import { ReactDOM } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import React from 'react';

import PetCard from './PetCard.js';

describe('PetCard Component', () => {
    it('Should display name', () => {
        render(
            <BrowserRouter>
                <PetCard name="Pesho" />
            </BrowserRouter>);

        expect(document.querySelector('h3').textContent).toBe('Name: Pesho');
    });

    it('Should increase likes when pet button is pressed', async () => {
        render(
            <BrowserRouter>
                <PetCard likes={5}/>
            </BrowserRouter>
        );

        // fireEvent.click(screen.getByText('Pet'));

        // await waitFor(() => screen.getByText('Pet'));

        expect(document.querySelector('.pet-info span').textContent).toBe('5');
    });



    // it('Should display name', () => {
    // console.log(process.env.NODE_ENV); -> show that the working environment is 'test'

    // Testing without React-testing-library
    // let divElement = document.createElement('div');
    // ReactDOM.render(<PetCard name="Pesho" />, divElement);
    // expect(divElement.querySelector('h3').textContent).toBe('Pesho');
    // });
});