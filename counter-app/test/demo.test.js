
describe('Pruebas en el archivo <DemoComponent>', () => {  

  test('esta prueba no debe fallar', ()=> {
  
    // if(0 === 1) {
    //   throw new Error('0 no es igual a 1')
    // }
  
    // 1. Inicialización 
    const message = 'Hola Mundo';
  
    // 2. Estímulo
    const message2 = message.trim();
  
    // 3. Observar el comportamiento
    expect(message).toBe(message2);
  
  
  })
})
