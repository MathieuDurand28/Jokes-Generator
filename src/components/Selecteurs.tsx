import { useEffect } from "react";

interface Props {
    lang: string,
    updateLang: (arg: string) => void,
    updateSearch: (arg: boolean) => void
  }


const Selecteurs = ({lang, updateLang, updateSearch}:Props) => {
    useEffect(() => {
        const label_fr = document.getElementById("label_FR")
        label_fr?.classList.add("text-yellow-400")
      }, [])

    const ToggleLang = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fr        =    document.getElementById("lang_FR")
        const label_fr  =    document.getElementById("label_FR")
        const en        =    document.getElementById("lang_EN")
        const label_en  =    document.getElementById("label_EN")

        updateLang(e.target.value)

        if (e.target.value === "fr") {
            console.log("langue FR")
            label_fr?.classList.add("text-yellow-400")
            label_en?.classList.remove("text-yellow-400")
        } else {
            console.log("langue EN")
            label_en?.classList.add("text-yellow-400")
            label_fr?.classList.remove("text-yellow-400")
        }
      }

      const GoSearch = () => {
        updateSearch(true)
      }

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center bg-sky-400/50 w-[80vw] h-[10em] justify-center space-y-4 border-[1px]">
                <h4 className="text-white">Quelle langue :</h4>
                <div className="flex justify-around w-[25em]">
                    <label htmlFor="lang_FR" id="label_FR" className="mr-0">Français</label>
                    <input className="mr-0 hidden" type="radio" id="lang_FR" name="lang" value="fr" defaultChecked onChange={ToggleLang} />
                    <label htmlFor="lang_EN" id="label_EN" className="mr-0">Anglais</label>
                    <input className="mr-0 hidden" type="radio" id="lang_EN" name="lang" value="en" onChange={ToggleLang} />
                </div>
                <button className="border-black w-40 h-10 rounded bg-sky-400/50 text-white hover:bg-sky-200/50 hover:text-sky-800 duration-300 " onClick={() => GoSearch()}>GO</button>
            </div>
        </div>
    );
};

export default Selecteurs;