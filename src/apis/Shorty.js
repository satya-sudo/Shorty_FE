import axios  from "axios";

import {baseurl} from "../apis/baseurl";

const shortyApi = axios.create({
    // .. congigure axios baseURL
    baseURL: baseurl,
  });

export default shortyApi;
 
