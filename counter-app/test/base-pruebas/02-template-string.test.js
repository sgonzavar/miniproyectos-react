import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => { 
  test("getSaludo debe de retornar hola santiago", () => {

    const name = 'Santiago'
    const message = getSaludo( name )
    expect( message ).toBe( `${ message }` )
    expect(getSaludo('John')).toBe('Hola John');
    expect(getSaludo('')).toBe('Hola ');
    // expect(() => getSaludo(123)).toThrow(TypeError);
    // expect(() => getSaludo(null)).toThrow(TypeError);
    // expect(() => getSaludo({name: 'John'})).toThrow(TypeError);
    // expect(() => getSaludo(123)).toThrow(TypeError);
  })


 })