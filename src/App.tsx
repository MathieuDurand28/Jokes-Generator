import { useEffect, useState } from 'react'
import  Header  from './components/Header'
import  Selecteurs  from './components/Selecteurs'
import JokesView from './components/JokesView'
import './App.css'
import Footer from './components/Footer'


function App() {
  const [lang, setLang] = useState("fr")
  const [search, setSearch] = useState(false)
  const [joke, setJoke] = useState({setup: "Appuyez sur Go pour démarrer", delivery: ""})

  useEffect(() => {
    if (search === false) return
    setSearch(false)
    getJoke(lang)
  }, [search])



  const getJoke = (lang: string) => {
    fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&lang=${lang}`)
      .then(response => response.json())
      .then(data => {
        if (data.setup === undefined) {
          setJoke({setup: "Une erreur est survenue", delivery: "Chargement de la blague impossible"})
        } else {
          setJoke({setup: data.setup, delivery: data.delivery})
        }
      })
  }

  const updateLang = (langage: string):void => {
    setLang(langage)
  }

  const updateSearch = (go: boolean):void => {
    setSearch(go)
  
  }

  return (
    <div className="App">
      <Header lang={lang} />
      <Selecteurs lang={lang} updateLang={updateLang} updateSearch={updateSearch} />
      <JokesView joke={joke}/>
      <Footer />
    </div>
  )
  
}


export default App
