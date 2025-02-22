import{createSlice} from '@reduxjs/toolkit';
const initialState = {
    dropDown : false,
    openLink : false,
    businessDropDown: false
}

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState,
    reducers: {
        setDropDown: (state, action) => {
            state.dropDown = action.payload;
        },
        setOpenLink: (state, action) => {
            state.openLink = action.payload;
        },
        setBusinessDropDown: (state, action) => {
            state.businessDropDown = action.payload;
        }
    }
})

export const {setDropDown, setOpenLink, setBusinessDropDown} = navBarSlice.actions;
export default navBarSlice.reducer;
