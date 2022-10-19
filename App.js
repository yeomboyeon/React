import React from "react"; // React 실행하기 위해 import 추가

import "./App.css";

function App() {
  // 적용하려는 관련 객체들 저장
  const [products, setProducts] = React.useState([
    {
      name: "Nike CruzrOne",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
    {
      name: "Nike Epic React Flyknit 2",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
  ]);

  // 장바구니에 담을 빈 배열 추가
  const [myCart, setMyCart] = React.useState([]);

  // 이미지 클릭시 보여주는 클린 modal 추가
  // 첫 화면은 클릭전이기에 show :false, image:null 값으로 설정
  const [showModal, setShowModal] = React.useState({
    show: false,
    image: null,
  });

  // useEffect 함수 추가(이미지 클릭 후 주변 배경 클릭시 사라지게 함)
  // click 이벤트, ...함수, show 화면과 image 화면에 각각 처리
  // setshowmodal 변수로 하여금 셋팅값 변경 처리
  React.useEffect(() => {
    window.addEventListener("click", (event) => {
      if (event.target.className === "modal-bg") {
        const cloneShowModal = { ...showModal };
        cloneShowModal.show = false;
        cloneShowModal.image = null;
        setShowModal(cloneShowModal);
      }
    });
  }, []); // 빈 배열을 추가해야 값이 쌓이게 된다.

  /**전체태그1,2 화면태그1,2 묶음 화면태그1,2
   * map() 자료 불러오기
   * key 값은 가장 상위 부모태그
   * 이미지에 클론 코딩 추가
   * 장바구니 클릭시 동일 상품 표시안되도록 구현하기
   * ...연산자 활용
   */
  return (
    <div className="App">
      <div className="wrapper">
        <div className="screen -left">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/pngwave.png"
            className="logo"
            alt="로고"
          />
          <div className="title">name</div>
          <div className="shop-items">
            {products &&
              products.map((item, index) => {
                return (
                  <div key={item.index}>
                    <div className="item">
                      <div className="item-block">
                        <div className="image-area">
                          <img
                            onClick={() => {
                              const cloneShowModal = { ...showModal };
                              cloneShowModal.show = true;
                              cloneShowModal.image = item.image;
                              setShowModal(cloneShowModal);
                            }}
                            src={item.image}
                            className="image"
                            alt="상품이미지"
                          />
                        </div>
                        <div className="name">{item.name}</div>
                        <div className="descrition">{item.descrition}</div>
                        <div className="bottom-area">
                          <div className="price">{item.price}</div>
                          <div
                            className="button"
                            onClick={() => {
                              const cloneMyCart = [...myCart];
                              cloneMyCart.push(item);
                              setMyCart(cloneMyCart);
                            }}
                          >
                            <p>ADD TO CART</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="screen -right">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/pngwave.png"
            className="logo"
            alt="로고"
          />
          <div className="title">Your Cart</div>
          <div className="shop-items">
            {myCart ? (
              myCart.map((item, index) => {
                return (
                  <div key={item.index}>
                    <div className="item">
                      <div className="item-block">
                        <div className="image-area">
                          <img
                            onClick={() => {
                              const cloneShowModal = { ...showModal };
                              cloneShowModal.show = true;
                              cloneShowModal.image = item.image;
                              setShowModal(cloneShowModal);
                            }}
                            src={item.image}
                            className="image"
                            alt="상품이미지"
                          />
                        </div>
                        <div className="name">{item.name}</div>
                        <div className="descrition">{item.descrition}</div>
                        <div className="bottom-area">
                          <div className="price">{item.price}</div>
                          <div className="button">
                            <p>ADD TO CART</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 300,
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                없습니다.
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal.show && (
        <>
          <div className="modal-bg" />
          <div className="modal">
            <img src={showModal.image} alt="확대사진" />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
