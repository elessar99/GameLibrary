import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/GameCard/NewsCard";
import { setInfo } from "../store/reducers/gameInfoActions";
import "./MainPage.css"
const MainView = () =>{

  const dispatch=useDispatch()
  const infoState=useSelector(state=>state.gameInfo)  
  console.log(infoState);
  return (
    <>
    <button onClick={()=>{
      dispatch(setInfo(true,1136))
      console.log(infoState)
    }}>denemeee</button>
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

