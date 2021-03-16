const resolveRoutes = (route) => route.length <= 3 ? (route === '/' ? route : "/:id") : `/${route}`;
export default resolveRoutes;