import heroes, { owners }  from '../data/hero'


// console.log(owners)

export const getHeroById = (id) => {
  return heroes.find( (hero)  => hero.id === id )
}

// console.log(getHeroById(2))

export const gerHeroByOwner = (owner) => {
  return heroes.filter( (hero) => hero.owner === owner )
}

// console.log(gerHeroByOwner('DC'))
