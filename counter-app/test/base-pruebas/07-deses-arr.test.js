import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 

  test('debe retornar un string y un numero', () => { 
    
    
    const [letter, number] = retornaArreglo() // ['ABC', 123]

    expect(letter).toBe('ABC')
    expect(typeof letter).toBe('string')

    expect(number).toBe(123)
    expect(typeof number).toBe('number')

  })


 })