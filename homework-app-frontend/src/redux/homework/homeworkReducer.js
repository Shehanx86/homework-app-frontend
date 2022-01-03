import {
  CREATE_NEW_HOMEWORK_LOADING,
  CREATE_NEW_HOMEWORK_SUCCESS,
  CREATE_NEW_HOMEWORK_UNSUCCESS,
  DELETE_HOMEWORK_LOADING,
  DELETE_HOMEWORK_SUCCESS,
  DELETE_HOMEWORK_UNSUCCESS,
  GET_HOMEWORK_BY_CREATED_TEACHER_LOADING,
  GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS,
  GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS,
  UPDATE_HOMEWORK_LOADING,
  UPDATE_HOMEWORK_SUCCESS,
  UPDATE_HOMEWORK_UNSUCCESS,
} from "./homeworkActionTypes";
const initialHomeworkState = {
  isLoading: false,
  data: [],
  error: {
    status: "",
    message: "",
  },
};

const homeworkReducer = (state = initialHomeworkState, action) => {
  switch (action.type) {
    case GET_HOMEWORK_BY_CREATED_TEACHER_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CREATE_NEW_HOMEWORK_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case CREATE_NEW_HOMEWORK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case CREATE_NEW_HOMEWORK_UNSUCCESS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_HOMEWORK_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_HOMEWORK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(
          (homework) => action.payload.id !== homework.id
        ),
      };
    case DELETE_HOMEWORK_UNSUCCESS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_HOMEWORK_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UPDATE_HOMEWORK_SUCCESS:
      return {
        data: state.data.map((homework) =>
          homework.id === action.payload.id ? action.payload : homework
        ),
      };
    case UPDATE_HOMEWORK_UNSUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default homeworkReducer;
