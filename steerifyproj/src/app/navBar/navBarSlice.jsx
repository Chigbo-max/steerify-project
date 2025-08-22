import{createSlice} from '@reduxjs/toolkit';
const initialState = {
    dropDown : false,
    openLink : false,
    productsDropDown: false
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
        setProductsDropDown: (state, action) => {
            state.productsDropDown = action.payload;
        }
    }
})

export const {setDropDown, setOpenLink, setProductsDropDown} = navBarSlice.actions;
export default navBarSlice.reducer;
