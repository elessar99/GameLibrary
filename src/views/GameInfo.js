import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../store/reducers/gameInfoActions";
import "./GameInfo.css"
const GameInfo = () =>{
    const infoState=useSelector(state=>state.gameInfo)
    const dispatch=useDispatch()
    
  return (
    <>
    {infoState.show&&(<div className="gameInfoBody" onClick={()=>{
        dispatch(setInfo(false,0))
    }}>
    </div>)}
    </>
    
  );
}

export default GameInfo;

