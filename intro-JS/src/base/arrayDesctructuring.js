const heores = ['goku', 'vegeta', 'trunks', 'krilin', 'gohan'];

const [p1, p2, p3, p4, p5] = heores;

console.log(p3);


const retornArray = () => {
  return ['ABC', 123];
}

const [letter, number] = retornArray();
console.log(letter, number)


const useState = (value) => {
  return [value, () => { console.log('hola mundo')}];
}

const [arr, setGretting] = useState('ABC');

console.log(arr)
setGretting()