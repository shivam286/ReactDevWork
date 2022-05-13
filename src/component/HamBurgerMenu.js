import { useState } from "react";

function HamBurgerMenu(props) {
  let { toggle } = props;
  const [containerToggle, isContainerToggled] = useState(true);

  const setNavBar = () => {
    toggle();
    if (containerToggle === false) {
      isContainerToggled(true);
    } else isContainerToggled(false);
    openNavBar();
  };

  function openNavBar() {
    if (containerToggle === true) {
      console.log("side bar closed");
    } else {
      console.log("side bar opened");
    }
  }
  return (
    <div
      className={`Container ${containerToggle ? "change" : ""}`}
      onClick={setNavBar}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default HamBurgerMenu;
