import "./Gamecard.css"
import PropTypes from "prop-types";
const Gamecard = ({name,src,genre,platform}) =>{
  return (
    <>
    <div className="gameCard">
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


}
Gamecard.defaultProps = {
    src: "-",
    name: "-",
    genre: "-",
    platform: "-",

}

export default Gamecard;
