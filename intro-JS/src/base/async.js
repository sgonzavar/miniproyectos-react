const getImages = async () => { 
  const urlKey = 'aRmmTrPWmK639GrozLOopaKZg6NE3y5f'
  const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${urlKey}`)
  const { data } = await resp.json()

  const img = document.createElement('img')
  img.src = data.images.original.url
  document.body.append(img)
}

getImages()
