import _ from 'lodash';
import {getCity} from "./token";
import "./banner.css";




getCity('berlin')
.then(data => console.log(data))
.catch(err => console.log(err));