import {createSlice} from "@reduxjs/toolkit";
import {TITAN_FORWARDING_CONSTANTS} from "../../../utils/constants.js";

const initialState = {
    variant: 'dark',
    drawerOpen: false,
    sidebarOpen: true,
    title: '',
    subtitle: '',
    language: 'en-GH',
    currency: 'USD',
    locale: 'en-US',
    network: '',
    ip: '',
    country: ''
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleVariant: (state) => {
            state.variant = state.variant === 'light' ? 'dark' : 'light';
            localStorage.setItem(
                TITAN_FORWARDING_CONSTANTS.TITAN_FORWARDING_THEME_VARIANT_KEY,
                JSON.stringify(state.variant)
            )
        },
        toggleDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleSidebarOpen: (state, action) => {
            state.sidebarOpen = action.payload;
            localStorage.setItem(
                TITAN_FORWARDING_CONSTANTS.TITAN_FORWARDING_THEME_VARIANT_KEY,
                JSON.stringify(state.sidebarOpen)
            )
        },
        setSubtitle: (state, action) => {
            state.subtitle = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        selectLanguage: (state, action) => {
            state.siteLanguage = action.payload;
            localStorage.setItem(
                TITAN_FORWARDING_CONSTANTS.TITAN_FORWARDING_LANGUAGE,
                JSON.stringify(state.siteLanguage)
            )
        }
    }
});

const {
    toggleDrawerOpen,
    toggleSidebarOpen,
    toggleVariant,
    setSubtitle,
    setTitle,
    selectLanguage,
    initialize
} = uiSlice.actions;

export const UI_ACTION_CREATORS = {
    toggleDrawerOpen,
    toggleSidebarOpen,
    toggleVariant,
    setSubtitle,
    setTitle,
    selectLanguage,
    initialize
};
export const selectUI = state => state.ui;
const reducer = uiSlice.reducer;
export default reducer;