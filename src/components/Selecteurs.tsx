interface Props {
    lang: string,
    updateLang: (arg: string) => void
  
  }

const Selecteurs = ({lang, updateLang}:Props) => {
    const ToggleLang = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateLang(e.target.value)
      }
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center bg-sky-400/50 w-[80vw] h-[5em] justify-center space-y-4 border-[1px]">
            <h4>Quelle langue :</h4>
                <div className="flex justify-center">
                    <label htmlFor="lang_FR" className="mr-2">Français</label>
                    <input className="mr-10" type="radio" id="lang_FR" name="lang" value="fr" defaultChecked onChange={ToggleLang} />
                    <label htmlFor="lang_EN" className="mr-2">Anglais</label>
                    <input className="mr-10" type="radio" id="lang_EN" name="lang" value="en" onChange={ToggleLang} />
                </div>
            </div>
        </div>
    );
};

export default Selecteurs;