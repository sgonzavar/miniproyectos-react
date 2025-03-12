
describe('prueba en <DemoComponent>', () => {
    test('esto es una prueba', () => {
    
        // 1. inicializacion 
        const message = 'hola mundo';
    
        // 2. estimulo
        const message2 = `hola mundo`;
    
        // 3. observar el comportamiento
        expect(message).toBe(message2)
    
    });

});