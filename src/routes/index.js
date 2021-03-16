// 
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Error404 from '../pages/Error404';

// Utilities
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/': Home,
    '/home': Home,
    '/:id': Character,
    '/about': About,
    '/projects': Projects
};

const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    console.log(`location.hash is: ${location.hash}`);
    header.innerHTML = await Header();
    let hash = getHash();
    console.log(`hash is: ${hash}`);
    let route = await resolveRoutes(hash);
    console.log(`Route is: ${route}`);
    let render = routes[route] || Error404;
    content.innerHTML = await render();
};

export default router;
