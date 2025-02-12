import Background from "../imgs/background_burger.jpeg";
function OrderBurger1() {
  return (
    <div>
      <div style={{ height: "580px", overflow: "hidden" }}>
        <img src={Background} alt="" width="400px" />
      </div>
      <div style={{ height: "70px", backgroundColor: "#fed801", display: "flex", alignItems: "center" }}>
        <div>
          <div className="smallText">⏺ 쿠폰 및 모바일 상품권 사용은 카운터에 문의해 주세요.</div>
          <div className="smallText">⏺ 현금 결제는 카운터에서만 가능. Please Pay at Front Counter for Cash.</div>
        </div>
      </div>
      <div
        style={{
          height: "150px",
          backgroundColor: "#284b36",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "white",
            height: "50px",
            width: "200px",
            border: "1px solid white",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          주문하시려면 터치하세요.
        </div>
      </div>
    </div>
  );
}

export default OrderBurger1;
