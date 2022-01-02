import { GET_HOMEWORK_BY_CREATED_TEACHER_LOADING, GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS, GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS } from "./homeworkActionTypes";

const initialHomeworkState = {
  isLoading: false,
  data: [],
  error: {
    status: '',
    message: ''
  }
};

const homeworkReducer = (state = initialHomeworkState, action) => {
  switch(action.type) {
    case GET_HOMEWORK_BY_CREATED_TEACHER_LOADING: 
      return { 
        ...state, 
        isLoading: action.payload, };
    case GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS:
      return { 
        ...state,
        isLoading: false,
        data: action.payload }
    case GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS:
      return { 
        ...state,
        isLoading: false,
        error: action.payload }
    default: return state;
  }
}

export default homeworkReducer;