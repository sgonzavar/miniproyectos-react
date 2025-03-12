import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['one piece'])

  const onAddCategory = (value) => {

    if (categories.includes(value)) return

    setCategories([value, ...categories])
  }

  return (
    <div>
      <h1>gif</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))
      }

    </div>
  )
}

export default GifExpertApp
