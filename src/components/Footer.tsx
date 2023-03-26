const Footer = () => {
    return (
        <footer className="footer w-full flex flex-col items-center bg-white rounded-lg dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://mdd-web.com" 
            className="hover:underline" target="_blank">Mathieu Durand</a>. API by <a className="hover:underline" href="https://v2.jokeapi.dev" target="_blank">JokeAPI</a>.
            </span>
            <ul className="flex items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://github.com/MathieuDurand28/Jokes-Generator" target="_blank" className="hover:underline"> -GitHub- </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;