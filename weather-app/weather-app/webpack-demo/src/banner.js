import _ from "lodash";
import "./banner.css";



const images = () =>{
    document.body.style.backgroundImage = "url('../src/images/bg.svg')";
    document.body.style.backgroundRepeat = "no-repeat"; 
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
}

export {images};