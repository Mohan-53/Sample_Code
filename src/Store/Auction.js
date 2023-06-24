import axios from "axios";

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const REMOVE_CARD = "REMOVE_CARD";
export const TOGGLE_CARD_DESIGN = "TOOGLE_CARD_DESIGN";

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_POST_REQUEST });
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({ type:FETCH_POST_SUCCESS, payload: response.data });
        }
        catch (error) {
            dispatch({ type: FETCH_POST_FAILURE, payload: error.message });
        }
    };
};

export const removeCard = (id) => {
    return { type: REMOVE_CARD, payload: id };
};

export const setCurrentPage = (page)=>{
return {type: SET_CURRENT_PAGE, payload: page};
}

export const toggleCardDesign = ()=>{
return {type: TOGGLE_CARD_DESIGN};
}