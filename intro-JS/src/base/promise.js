import { getHeroById } from "./base/imp-exp";


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero)
//     // reject(hero)
//   }, 2500);
// })

// promise.then( (hero) => { console.log('then resolve', hero)} )
//       .catch((err) => { console.log('then reject', err)})



const getHeroByIdAsync = async ( id ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if( hero  ){
        resolve(hero)
      } else {
        reject(`No existe heroe con id ${id}`)
      }
    }, 2500);
  })
}

getHeroByIdAsync(12)
  .then( (hero) => { console.log('then resolve', hero)} )
  .catch((err) => { console.log('then reject', err)})


  //tambien funciona asi
getHeroByIdAsync(12)
  .then( console.log )
  .catch( console.log )