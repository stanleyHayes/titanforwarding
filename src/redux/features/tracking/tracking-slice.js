import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TRACKING_API} from "../../../api/tracking.api.js";


const trackShipment = createAsyncThunk(
    'shipment/trackShipment',
    async ({trackingID}, {rejectWithValue}) => {
        try {
            const response = await TRACKING_API.trackShipment(trackingID);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            return rejectWithValue(message);
        }
    });


const shipmentSlice = createSlice({
    name: 'tracking',
    initialState: {
        shipment: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(trackShipment.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.shipmentMessage = null;
        }).addCase(trackShipment.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.shipment = action.payload.data;
        }).addCase(trackShipment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.shipment = null
        })
    }
});


export const TRACKING_ACTION_CREATORS = {trackShipment};
const {reducer} = shipmentSlice;
export const selectTracking = state => state.tracking;

export default reducer;
