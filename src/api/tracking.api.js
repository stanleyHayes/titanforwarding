import axios from "axios";
import {TITAN_FORWARDING_CONSTANTS} from "../utils/constants.js";

const trackShipment = (tracking_number) => {
    return axios({
        method: 'get',
        url: `${TITAN_FORWARDING_CONSTANTS.BASE_SERVER_URL}/user/shipments/track/${tracking_number}`,
    });
}
export const TRACKING_API = {trackShipment};