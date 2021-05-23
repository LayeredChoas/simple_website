import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS, PRODUCT_LIST_FAIL } from "../constants/productConstatns";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    try{
        const {data} = await axios.get('/api/products');
        dispatch({type: PRODUCT_LIST_SUCESS, payload: data.products});
    }catch (err){
        dispatch({type: PRODUCT_LIST_FAIL, payload: err.message});
    }
};