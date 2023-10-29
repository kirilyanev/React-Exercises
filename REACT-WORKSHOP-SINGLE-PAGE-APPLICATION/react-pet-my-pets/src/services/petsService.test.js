import * as petsService from './petsService.js';

//  --------------------------------------------
// EXAMPLE OF A MOCK(fake) SERVER (currently facing a problem with ESM imports, not resolved!!!) 

// TO BE FIXED
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// const server = setupServer(
//     rest.get('http://localhost:5000/pets', (req,res,ctx) => {
//         return res(ctx.json([{likes: '10'}]));
//     }),
// );

// beforeAll(() => {
//     server.listen();
// });

// afterEach(() => server.resetHandlers());

// afterAll(() => server.close());

//  --------------------------------------------



// The same code(down) to be used when the setup of mock(fake) server (above) is working correctly
// Currently working with requests to a real server
describe('Pet service', () => {
    describe('Get all functionality', () => {
        it('Should convert likes to numbers when received', (done) => {
            petsService.getAll()
                .then(result => {
                    expect(typeof(result[0].likes)).toBe('number');
                    done();
                });
        });
    });
});