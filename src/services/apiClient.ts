// API client that contains the baseURL and the parameters needed
// for the requests made to rawg. Enables methods offered by Axios.

import axios from "axios";

export default axios.create(
    {
        baseURL: "https://api.rawg.io/api",
        params: {
            key: "baf13d58e83940618bf78c5640f91f44"
        }
    }
);