import { useEffect, useState } from 'react'
/**
 * 
 * @file Header.tsx
 * @description Header component
 * @author moi
 * @version 1.0.0
 * @license MIT
 */



interface HeaderProps {
    lang: string
}
const dictionnary: { [char: string]: string } = {
    fr: "Une blague en français ?",
    en: "A joke in English ?"
}

const Header = ({lang}:HeaderProps) => {
    const [phrase, setPhrase] = useState(dictionnary[lang])
    
    useEffect(() => {
        setPhrase(dictionnary[lang])
    }, [lang])

    return (
        <header className="flex items-center justify-center px-4 py-2 mb-10 mt-10 bg-grey-500/100 shadow-md">
           <h1 className="text-[1.4rem] font-bold text-sky-500">{phrase}</h1>
        </header>
    );
};

export default Header;