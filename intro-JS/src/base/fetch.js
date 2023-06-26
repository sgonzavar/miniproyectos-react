

const urlKey = 'aRmmTrPWmK639GrozLOopaKZg6NE3y5f'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${urlKey}`)


// console.log(API)

peticion
      .then(resp => resp.json())
      .then(({ data }) => {
        const img = document.createElement('img')
        img.src = data.images.original.url
        document.body.append(img)
      })
      .catch( console.warn )














