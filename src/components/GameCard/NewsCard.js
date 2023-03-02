import "./NewsCard.css"
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setNews } from "../../store/reducers/newsInfoActions";
const NewsCard = ({newsTitle,src,short,id}) =>{
    const dispatch=useDispatch()
  return (
    <>
    <div className="newsCard" onClick={()=>{
        dispatch(setNews(true,id))
    }} >
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
    id: PropTypes.number,


}
NewsCard.defaultProps = {
    src: "-",
    newsTitle: "-",
    short: "-",
    platform: "-",
    id: 0,

}

export default NewsCard;
