const { PRODUCT_LIST_SUCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST } = require("../constants/productConstatns");

export const productListReducer = (state = {loading: true, products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
                return {loading: true};
        case PRODUCT_LIST_SUCESS:
                return {loading: false, products: action.payload};
        case PRODUCT_LIST_FAIL:
                return {loading: false, error: action.payload};
        default:
                return state;
    }
}