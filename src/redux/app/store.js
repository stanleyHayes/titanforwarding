import {configureStore} from "@reduxjs/toolkit";

import uiReducer from "../features/ui/ui-slice.js";
import appInfoReducer from "../features/app-info/app-info-slice.js";
import newsReducer from "../features/news/news-slice.js";
import trackingReducer from "../features/tracking/tracking-slice.js";

import {TITAN_FORWARDING_CONSTANTS} from "../../utils/constants.js";
import {HELPERS} from "../../utils/helpers.js";

const variant = localStorage.getItem(TITAN_FORWARDING_CONSTANTS.TITAN_FORWARDING_THEME_VARIANT_KEY) ?
    localStorage.getItem(TITAN_FORWARDING_CONSTANTS.TITAN_FORWARDING_THEME_VARIANT_KEY) : HELPERS.getSystemTheme();

const store = configureStore({
    reducer: {
        ui: uiReducer,
        appInfo: appInfoReducer,
        news: newsReducer,
        tracking: trackingReducer,
    },
    preloadedState: {
        ui: {
            variant,
            ...HELPERS.getUserDetails()
        }
    }
});

export default store;