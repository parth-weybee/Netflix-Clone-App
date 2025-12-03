import { useSelector } from "react-redux";
import { TEXT_LANG } from "../utils/constants";
import { useRef } from "react";


const GptSearch = () => {
  const currentLang = useSelector(store => store.lang?.selectedLang);
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
            <input ref={queryText} type="text" className="bg-white grid-cols-10 p-3 my-2" placeholder={TEXT_LANG[currentLang]?.placeholder}/>
            <button className="grid-cols-2 bg-red-600 p-3 my-2 text-white" onClick={handleSubmit}>{TEXT_LANG[currentLang]?.button}</button>
        </form>
    </div>
  )
}

export default GptSearch;