

export const getGifs = async(category) => {
    const resp = await fetch(url)
    const { data } = await resp.json()

    //se crea un objeto con los datos que necesitamos
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}