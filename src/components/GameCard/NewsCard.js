import "./NewsCard.css"
import PropTypes from "prop-types";
const NewsCard = ({newsTitle,src,short}) =>{
  return (
    <>
    <div className="newsCard">
        <div className="cardImg">
            <img src={src} />
        </div>
        <div className="cardInfo">
            <h2 className="cardTitle">
                {newsTitle}
            </h2>
            <div className="cardShort">
                {short}
            </div>
        </div>
    </div>
    </>
    
  );
}

NewsCard.propTypes = {
    src: PropTypes.string,
    newsTitle: PropTypes.string,
    short: PropTypes.string,


}
NewsCard.defaultProps = {
    src: "-",
    newsTitle: "-",
    short: "-",
    platform: "-",

}

export default NewsCard;
