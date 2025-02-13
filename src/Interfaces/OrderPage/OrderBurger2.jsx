import { useNavigate } from "react-router-dom";
import "../Main.css";
import SetImg from "../imgs/burger_set.png";
import BagImg from "../imgs/paper_bag.png";
import HomeImg from "../imgs/home.png";

function OrderBurger2() {
  const navigate = useNavigate();

  return (
    <div
      style={{ height: "100%", width: "100%", backgroundColor: "#284b36", display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "100%" }}>
        <div
          style={{ marginTop: "50px", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          로고
        </div>
        <div
          style={{
            height: "100px",
            color: "white",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          식사하실 장소를 선택해 주세요.
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="WhiteButton" onClick={() => navigate("/OrderBurger3")}>
            <div>
              <img src={SetImg} width="110px" />
              <div style={{ margin: "10px 0 0 10px" }}>매장에서 식사</div>
            </div>
          </div>
          <div className="WhiteButton" onClick={() => navigate("/OrderBurger3")}>
            <div>
              <img src={BagImg} width="90px" />
              <div style={{ margin: "10px 0 0 8px" }}>테이크 아웃</div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={HomeImg} alt="" width="100px" />
            <div>
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                kiosk 메인으로
                <br />
                돌아가기
                <br />▼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderBurger2;
