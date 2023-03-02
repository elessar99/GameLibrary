import "./Gamecard.css"
import PropTypes from "prop-types";
import GameInfo from "../../views/GameInfo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInfo } from "../../store/reducers/gameInfoActions";
const Gamecard = ({name,src,genre,platform,id}) =>{
    const dispatch=useDispatch()
  return (
    <>
    <div className="gameCard" onClick={()=>{
        dispatch(setInfo(true,id))
    }} >
        <div style={{minWidth:"365px",minHeight:"206px"}}>
            <img alt="Kaynak Bulunamadı!!" src={src} />
        </div>
        <div className="gameCardHeader">
            {name.length<31? name : name.slice(0,30) + "..."}
        </div>
        <div className="gameCardFood">
               | {genre}  |  {platform}  
        </div>
    </div>

    </>
    
    
  );
}

Gamecard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.string,
    platform: PropTypes.string,
    id: PropTypes.number,
}
Gamecard.defaultProps = {
    src: "-",
    name: "-",
    genre: "-",
    platform: "-",
    id: 0,

}

export default Gamecard;
