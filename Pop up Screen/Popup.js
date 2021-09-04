import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import classes from "./popup.module.css";
export default function Popup() {
  const [popup, setPopup] = useState(false);
  function showPopup() {
    setPopup(true);
  }
  function closePopup(event) {
    // when mouse click at pop up screen
    // get if of current element
    let currentId = event.target.id;
    console.log(currentId);
    if (currentId !== "login") setPopup(false);
  }
  return (
    <div>
      <button onClick={showPopup}> Click here to pop up! </button>
      <Fade in={popup}>
        <div id="mask" className={classes.mask} onClick={closePopup}>
          <div id="login" className={classes.login}>
            login here: when mouse click this area, pop up screen not close.
            When clicking outside area, pup up screen closed.
          </div>
        </div>
      </Fade>
    </div>
  );
}
