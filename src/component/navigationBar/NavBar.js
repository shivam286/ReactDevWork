import { useState } from "react";
import LoginSignUpModal from "./LoginSignUpModal";
import "./NavBar.css";
import HamBurgerMenu from "../HamBurgerMenu";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [modalVisiblity, setModalVisiblity] = useState(false);

  let navigate = useNavigate()

  const routeChange = () => {
    let path = 'MyOrder'
    navigate(path)
  }

  const changeModalVisiblity = () => {
    setModalVisiblity(true);
  };

  const onCancel = () => {
    setModalVisiblity(false);
};
const handleSuccess = () => {
    console.log('logged in successfully')
    setModalVisiblity(false);
};
  return (
    <div className="NavigationContainer">
      <sideNavMenu/>
      <HamBurgerMenu/>
      <div className="Title">
        <p className="TitleName">Shopper</p>
      </div>
      <div className="LoginButton" onClick={changeModalVisiblity}>
        <p className="LoginText">Login</p>
      </div>
      <div className="AboutUs">
        <p className="TextAboutUs" onClick={routeChange}>About Us</p>
      </div>
      <div>
        <LoginSignUpModal
          visible={modalVisiblity}
          handleSuccess={handleSuccess}
          onCancel={onCancel}
        ></LoginSignUpModal>
      </div>
    </div>
  );
}

export default NavBar;
