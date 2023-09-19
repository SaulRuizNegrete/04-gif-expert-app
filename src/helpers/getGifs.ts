
export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kwbR0FeS7Kret6M6Y7QG1eARMEXQQ5sq&q=${ category }&limit=20`
    const resp = await fetch(url)

    const { data } = await resp.json()

    const gifs = data.map( (img: any) => ({
        id: img.id, 
        title: img.title, 
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs
}