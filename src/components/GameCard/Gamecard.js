import "./Gamecard.css"
import PropTypes from "prop-types";
const GameCard = ({name,src,genre,platform}) =>{
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
                {genre}    {platform}
        </div>
    </div>
    </>
    
  );
}

GameCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.string,
    platform: PropTypes.string,


}
GameCard.defaultProps = {
    src: "-",
    name: "-",
    genre: "-",
    platform: "-",

}

export default GameCard;
