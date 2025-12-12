import { useSelector } from "react-redux";
import { GEMENI_API, TEXT_LANG } from "../utils/constants";
import { useRef } from "react";


const GptSearch = () => {
  const currentLang = useSelector(store => store.lang?.selectedLang);
  const searchPrompt = useRef();
  const handleSubmit = async ()=>
  {
     const prompt = "recommende me 10 movies based on given prompt: \"" + searchPrompt + "\" in format of comma seperated names like Ra.One,Baaghi,Dilwale,Shaandar,Aankhen,Agent Vinod,Dostana,Khoobsurat,Mr X,Baby";
     console.log(process.env.REACT_APP_GEMENI_API_KEY);
     const res = await fetch(GEMENI_API,{
      method: "POST",
      headers: {
        "x-goog-api-key": process.env.REACT_APP_GEMENI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
         { parts: [
            {
              text: prompt
            }
          ]}
        ]
      })
     })
     const data = await res.json();
     console.log(data);

  };
  return (
    <div className="flex h-[100vh] justify-center items-center">
       <div className="fixed -z-10 w-full">
        <img
          className="w-full h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
          alt="bg-img"
        />
      </div>
        <form className="p-2 bg-transparent w-11/12 lg:w-1/2 grid grid-flow-col" onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchPrompt} type="text" className="bg-white grid-cols-10 p-3 my-2" placeholder={TEXT_LANG[currentLang]?.placeholder}/>
            <button className="grid-cols-2 bg-red-600 p-3 my-2 text-white" onClick={handleSubmit}>{TEXT_LANG[currentLang]?.button}</button>
        </form>
    </div>
  )
}

export default GptSearch;