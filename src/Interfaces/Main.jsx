import "./Main.css";
import HamburgerImg from "./imgs/hamburger.png";
import { useNavigate } from "react-router-dom";

const SelectButton = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="btn"
      style={{ backgroundColor: `${props.color}`, cursor: "pointer" }}
      onClick={() => navigate("/OrderBurger1")}
    >
      <div>
        <img src={props.src} alt="" width="80px" />
        <p>{props.title}</p>
      </div>
    </div>
  );
};

function Main() {
  return (
    <div className="wrapper">
      <div>
        <div className="header">
          <p>타이틀 로고</p>
        </div>
        <div className="options">
          <div className="buttonwrap">
            <SelectButton title="패스트푸드" src={HamburgerImg} color="lightblue" />
            <SelectButton title="패스트푸드" src={HamburgerImg} color="lightblue" />
          </div>
          <div className="buttonwrap">
            <SelectButton title="패스트푸드" src={HamburgerImg} color="lightblue" />
            <SelectButton title="패스트푸드" src={HamburgerImg} color="lightblue" />
          </div>
          <div className="buttonwrap">
            <SelectButton title="패스트푸드" src={HamburgerImg} color="lightblue" />
            <SelectButton title="패스트푸드" src={HamburgerImg} color="lightblue" />
          </div>
        </div>
        <div className="footer">
          <div>로고 1</div>
          <div>로고 2</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
