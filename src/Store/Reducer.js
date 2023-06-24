import { combineReducers } from "redux";
import {
    FETCH_POST_REQUEST, FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE, REMOVE_CARD
} from "./Auction";

const initialState = {
    posts:[],
    loading: true,
    error: null,
    currentPage: 1,
    cardsPerPage: 6,
    viewToggle: false,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return { ...state, loading: true };
        case FETCH_POST_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case FETCH_POST_FAILURE:
            return { ...state, loading: false, posts: action.payload };
        case REMOVE_CARD:
            const updatedPosts = state.posts.filter((post) => post.id !== action.payload);
            return { ...state, posts: updatedPosts };
        default:
            return state;
    }
}

 export const itemReducer= combineReducers({
    posts:postReducer,
})