export const getGifs = async category => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eo6R8h4SN6YNHKzQnQrZXtNDDwhpn9H1&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};
