import { AUTHENTICATION_REFRESH } from "../auth/actionTypes";
import { GET_HOMEWORK_BY_CREATED_TEACHER_LOADING, GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS, GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS } from "./homeworkActionTypes";

const initialHomeworkState = {};

const homeworkReducer = (state = initialHomeworkState, action) => {
  switch(action.type) {
    case GET_HOMEWORK_BY_CREATED_TEACHER_LOADING: 
      return { loading: action.payload };
    case GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS:
      return { success: action.payload }
    case GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS:
      return { unsuccess: action.payload }
    default: return state;
  }
}

export default homeworkReducer;