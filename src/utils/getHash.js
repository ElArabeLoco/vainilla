const getHash = () => location.hash.replace(/#\/([a-z0-9]+)/, '$1').toLocaleLowerCase() || '/';
export default getHash;
