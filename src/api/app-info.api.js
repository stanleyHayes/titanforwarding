import axios from "axios";
import {TITAN_FORWARDING_CONSTANTS} from "../utils/constants.js";

const getAppInfo = () => {
    return axios({
        method: 'get',
        url: `${TITAN_FORWARDING_CONSTANTS.BASE_SERVER_URL}/app`
    });
}
export const APP_INFO_API = {getAppInfo};