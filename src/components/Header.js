import { useSelector,useDispatch } from "react-redux"
import { removeUser, setUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LANG_LIST, LOGO_URL, USER_AVATAR } from "../utils/constants";
import { useEffect } from "react";
import { toggleShowGpt } from "../utils/gptSlice";
import { changeLang } from "../utils/langSlice";

const Header = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useEffect(()=>
  {
    if(user)
    {
      navigate("/browse");
    }
  },[]);
  const handleSignOut = ()=>
  {
    dispatch(removeUser());
    navigate("/auth");
  }
  return (
    <div className="w-full bg-gradient-to-b from-black absolute z-10">
      <nav className="lg:w-8/12 flex flex-col lg:flex-row m-auto justify-between items-center">
        <div className="logo px-4 py-4 w-52">
          <img src={LOGO_URL} alt="logo" />
        </div>
        {/* { true */}
        {user?.email 
        &&  
       <div className="logo px-4 py-4 items-center flex justify-between lg:justify-normal text-white">
          {showGptSearch && <select className="bg-black text-white p-2" onChange={(e)=> dispatch(changeLang(e.target.value))}>
            {
              LANG_LIST.map((obj)=> <option value={obj.identifier} key={obj.identifier}>{obj.name}</option>)
            }
          </select>}
          <button onClick={()=> dispatch(toggleShowGpt())} className="px-4 py-2 bg-sky-600 mx-2 rounded-sm">{showGptSearch ? "Home Page" : " Gpt Search"}</button>
          <img className="w-10" src={USER_AVATAR} alt="user icon" />
          <button onClick={handleSignOut}>( Sign Out )</button>
        </div>}
      </nav>
    </div>
  )}
  
export default Header