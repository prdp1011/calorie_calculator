import axios from 'axios';

import { startloading, apiFailure } from "../actions/common";
import { ROUTES } from '../constants';


const error_msg = (dispatch, error, history = null) => {
    dispatch(apiFailure(error.message));
    alert(error.response.data.message);
    if(error.response.status === 401){
      localStorage.setItem('isAuthenticated', 'false');
      history?.push(ROUTES.LOGIN);
    }
    throw error;
}
const Get =  (url) => async (dispatch, history) => {
    dispatch(startloading())
    try {
      return await axios.get(url);
    } catch (error) {
      return error_msg(dispatch, error, history);
    }
}

const Post = (url, data) => async (dispatch, history) => {
    dispatch(startloading())
    try {
      return await axios.post(url, data);
    } catch (error) {
      return error_msg(dispatch, error, history);
    }
}

const Patch = (url, data) => async (dispatch, history) => {
    dispatch(startloading())
    try {
      return await axios.put(url, data);
    } catch (error) {
        return error_msg(dispatch, error, history);
    }
}
const Delete = (url) => async (dispatch, history) => {
    dispatch(startloading())
    try {
      return  await axios.delete(url);
    } catch (error) {
      return error_msg(dispatch, error, history);
    }
}
export {Get, Post, Patch, Delete}  ;