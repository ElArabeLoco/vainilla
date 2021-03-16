import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    console.log(`characters: ${characters}`);
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            `).join('')}
            <article class="Site">
                Welcome to the Machine
            </article>
        </div>
    `;
    
    return view;
};

export default Home;