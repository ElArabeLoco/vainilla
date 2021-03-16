const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}/${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(`data: ${data}`)
        return data;
    } catch (error) {
        console.error(`Fetch error occurred`, error);
    }
}

export default getData;