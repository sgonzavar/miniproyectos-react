import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas para 02-template-string', () => {

    test('getSaludo debe retornar un string con Hola + nombre', () => {
       
        const name = 'juan';
        const greting = getSaludo(name);

        expect(greting).toBe(`Hola ${name}`); 
    });


});