import React from "react";
import "./Toggle.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Toggle = ({ ismenuOpen, setIsmenuOpen }) => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAADCCAMAAACYEEwlAAAAwFBMVEX////lGDcAAAAPDw/kACPjABnlCjDkACjlFDX2xMnkACblHDn++vr4zdHkACvzrrTqYnDvjpfsbnrmLkf87e/0s7n63uDjAB7oTV7zqbD41dj85+nyoqniAAD4z9LwlJzwmqK5ubnj4+OHh4egoKDi4uJBQUE5OTmvr6/jABPpWGfteIPQ0NBbW1uRkZGpqal6enrw8PDCwsMwMDBjY2N0dHROTk4VFRUfHx+NjY31vsPpUmPuhY/raHXnPFHtfIcmBF3MAAAEvUlEQVR4nO3afVuiSgAFcEQYURFbLfHl0k1JE8XXzbayvfv9v9VFREQYGHxWpYc5vz92U2d0ONEBIkEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAYq8HQttfr/s56bdvDwSrrJd3OYP28nP0U6V5ezcV6kPUSr0pdm6PD5hZHrxtzPn/em8/NzezFz+Jtbme91mt587bQHNtxe/7AXiy9nJY3XdvNrMXisn/c11crpxb2DwdD54HqvzIcb0RxePP13Ya7xSt7Yb6Ofh32/L7zlHl48P62+Rjbqj82l1b9TTFQg0WH8x0f7784el+us17pFdnehovvm/nz+GX/oL//bzZ+/ngtugOcHPJ8uFz9dDZSXO430XS3vuj9O3afG85EJ4O3LNd4AwtRNL0v97uARzwcFGfie55/GDyLQ+cNT0I4vGxzEEFQIATxJevFZGV0TCGv50ZsZiCEcdaLyUqgGXN7gsgUaEaRPTqv/BD47cVAM/Lbi4Fm5LcXA83Iby8GmpHjXvSbURxlvZAsec3oX1NxyRS570W/GXnuRb8Zue5Frxn57kWvGfnuRa8Z3d+7c8xtRr570WtGznvRbUbee3F3l5b7XnSbkfdedJuR9150m5H7XnSaEb24a0bue1EQPtCLu2bM7x+lpDZALzo4vu9ytMh6Ad9Bnv88CQAAAAAAcuiznMbn6SQ1xaxe+JPULlXt8aDWCk+5f9yNiDxNd19ju6dPvZMlNr0amkV01hQjsvSeodMEptTDU8qG87R1lzIEg7kdRszUrlVg00N7gvCgM2aQSeSTeow5SjhpQahJu7dqpAtBmGqMRZV+xE6tMDPQtpFZbZK8QVZ0x2OEoFjR3f68ENSKkvwJhfi5bVYKWlONTFKrSbErVi36OckhEL0bnXJeCELLSkqBSJGaCphaRPEdNsNHZOrPpDqRA7NOkAqhbJAXgkKo5C2ts84MQWhVpdhFSc2YVvR0G1Xf/hus+Y+V348xs2qNJl27Qx3vhqBUt22KBi2180MQhHq7UKVRtg/nvEtpl0Fsg/wFNwSSsur3zg/hMjpXDiF61EiAEASE4EIIwncPQU0hPCd3IRgyi1EOz/HOExKmPIWnnBdCnX5xcmSkPUymC+FHKensr0C9EGBdOxRK/4SnnBfCA+vUt3LZEAQt+TS9YEV2hByG0E08TS/olDfIXwhCV4rfGYhFm5/DEAT1S5ep9SNbE+qVQC+hTUuXC4FQF6VdJwTHPV30wnsv4WjqXrFcJATy1WtF9b60a4VwOe76LxKC9i/1tSeEgBBcCEFACK4rhKB26iydmFsmnx2K+pQkhDB5jL3Dc3IsvvWe0JQqDAbtV7vqlyyVaEjCeUKBxN9MOdmqW4fwKTNOzrTftFlS4u2RuBBiKaWT0TfvhLvkuz2KRDljekq+3jg/BPl0o25fjP8lXUwTyt0kocPae84NQf9zOvqCIeiEECnF0WFqafT7KIToTUohtIy44f60aAhywnDrKTT6wV16TAjS7gPShlBuTB1pRre+Jnc0k0b49q3rD3XwycTIp3a38aMbkaDLu/VM6Hd+6rvXttFfcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxn/wNqr4ttf4GLEQAAAABJRU5ErkJggg=="
          alt=""
          className="image"
        />
      </div>
      <div className="header__middel">
        <li>model X</li>
        <li>model Y</li>
        <li>model S</li>
        <li>model 3</li>
      </div>
      <div className="header__right">
        <li className={ismenuOpen && "header__link__hidden"}>Shop</li>
        <li className={ismenuOpen && "header__link__hidden"}>Tesla Account</li>
        <li>
          <div
            className="header__menu"
            onClick={() => setIsmenuOpen(!ismenuOpen)}
          >
            {ismenuOpen ? <CloseIcon className="close" /> : <MenuIcon />}
          </div>
        </li>
      </div>
    </div>
  );
};

export default Toggle;
