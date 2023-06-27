import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"



describe('Prueba a 05-funciones', () => { 
  
  
  test('getUser debe de retornar un objeto', () => { 

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser()

    expect(user).toEqual(testUser)

   })


   test('getUsuarioActivo debe de retornar un objeto', () => { 

    const name = 'tiago'
    const testUSer = {
      uid: 'ABC567',
      username: name
    }

    expect(getUsuarioActivo(name)).toEqual(testUSer)

    })
 })