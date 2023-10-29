// import { ReactDOM } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

import PetCard from './PetCard.js';
import * as petsService from '../../services/petsService.js';

jest.mock('../../services/petsService.js');

describe('PetCard Component', () => {
    it('Should display name', () => {
        render(
            <BrowserRouter>
                <PetCard name="Pesho" />
            </BrowserRouter>);

        expect(document.querySelector('h3').textContent).toBe('Name: Pesho');
    });

    it('Should increase likes when pet button is pressed', async () => {
        petsService.pet.mockResolvedValue({ likes: 6 });

        render(
            <BrowserRouter>
                <PetCard likes={5} />
            </BrowserRouter>
        );

        // Click the 'Pet' button
        fireEvent.click(screen.getByText('Pet'));
        
        // Wait for state to update
        await waitFor(() => screen.getByText('6'));

        expect(document.querySelector('.pet-info span').textContent).toBe('6');
        // expect(screen.getByText('6')).toBeInTheDocument();
    });



    // it('Should display name', () => {
    // console.log(process.env.NODE_ENV); -> show that the working environment is 'test'

    // Testing without React-testing-library
    // let divElement = document.createElement('div');
    // ReactDOM.render(<PetCard name="Pesho" />, divElement);
    // expect(divElement.querySelector('h3').textContent).toBe('Pesho');
    // });
});