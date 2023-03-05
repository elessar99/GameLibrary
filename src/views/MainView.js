import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/GameCard/NewsCard";
import { setInfo } from "../store/reducers/gameInfoActions";
import "./MainPage.css"
const MainView = () =>{


  return (
    <>

    <div className="denemex">
      <NewsCard
        newsTitle={"European Commission Extends Deadline On Decision For Microsoft's Purchase Of Activision Blizzard"}
        short={"Regulators seem to be in no hurry to make a decision."}
        src={"https://www.mmobomb.com/file/2023/3/call-of-duty-microsoft-activision-218x150.jpg"}
      />
    </div>
    </>
    
  );
}

export default MainView;

