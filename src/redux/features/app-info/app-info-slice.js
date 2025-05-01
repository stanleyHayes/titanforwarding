import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APP_INFO_API} from "../../../api/app-info.api.js";

const initialState = {
    name: 'Titan Forwarding',
    slogan: 'Driven by Speed. Delivered with Care.',
    email: 'info@titanforwarding.com',
    phone: '850-522-6745',
    address: {
        country: '',
        state: '',
        city: '',
        address_line_1: '',
        address_line_2: '',
        summary: '207,208 Regent St. London W1B 3HH, United Kingdom',
        map_location: ''
    },
    logo: {

    }
}

export const getRole = createAsyncThunk(
    'appInfo/getRole',
    async ({token, navigate}, thunkAPI) => {
        try {
            const response = await APP_INFO_API.getAppInfo({token});
            navigate('/');
            return response.data;
        }catch (e) {
            const {message} = e.response.data;
            return thunkAPI.rejectWithValue(message);
        }
    }
)

const appInfoSlice = createSlice({
    name: 'appInfo',
    initialState,
    reducers: {
        setToken: (state, payload) => {
            state.token = payload;
        },
        setAuthData: (state, payload) => {
            state.authData = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRole.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getRole.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.role = action.payload;
        }).addCase(getRole.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
});


const reducer = appInfoSlice.reducer;
export const {setAuthData, setToken} = appInfoSlice.actions;
export const selectAppInfo = state => state.appInfo;
export default reducer;