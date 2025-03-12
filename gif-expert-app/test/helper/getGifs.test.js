import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()' , () => {

    test('debe retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan( 0 );
        


    })


})