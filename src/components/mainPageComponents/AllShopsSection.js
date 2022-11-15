import AllShopSlider from '../slider/AllShopsSlider';

const CategurySection = () => {
  return (
    <div className="d-flex flex-column justify-content-center mt-4">
      <div className="col-12 d-flex justify-content-between  m-auto">
        <div className="font-4 fw-bolder">تمام فروشگاه ها</div>
      </div>
      <div className="col-10 mx-auto">
        <AllShopSlider></AllShopSlider>
      </div>
    </div>
  );
};

export default CategurySection;
