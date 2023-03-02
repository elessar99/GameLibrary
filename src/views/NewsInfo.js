import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../store/reducers/newsInfoActions";
import "./NewsInfo.css"
const NewsInfo = () =>{
    const infoState=useSelector(state=>state.newsInfo)
    const dispatch=useDispatch()
    
  return (
    <>
    {infoState.show&&(<div className="newsInfoBody" onClick={()=>{
        dispatch(setNews(false,0))
    }}>
    </div>)}
    </>
    
  );
}

export default NewsInfo;

