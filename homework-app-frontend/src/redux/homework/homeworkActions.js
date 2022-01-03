import {
  createNewHomework,
  deleteHomeworkById,
  getHomeworksByCreatedTeacher,
  updateHomeworkById,
} from "../../api/homeworkAPI";
import {
  handleCreateNewHomeworkLoadingRequest,
  handleCreateNewHomeworkSuccessResponse,
  handleCreateNewHomeworkUnsuccessResponse,
  handleGetHomeworksByCreatedTeacherLoadingRequest,
  handleGetHomeworksByCreatedTeacherSuccessResponse,
  handleGetHomeworksByCreatedTeacherUnsuccessResponse,
  handleHomeworkDeleteLoadingRequest,
  handleHomeworkDeleteSuccessResponse,
  handleHomeworkDeleteUnsuccessResponse,
  handleHomeworkUpdateLoading,
  handleHomeworkUpdateSuccess,
  handleHomeworkUpdateUnsuccess,
} from "../../handlers/homerworkHandler";
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
import { toast } from "react-toastify";
import { homeworkPromiseToast } from "../../components/toasts/promiseToasts";

export const getHomeworksByCreatedTeacherAction = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_HOMEWORK_BY_CREATED_TEACHER_LOADING,
      payload: handleGetHomeworksByCreatedTeacherLoadingRequest(),
    });
    try {
      let response = await getHomeworksByCreatedTeacher();
      dispatch({
        type: GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS,
        payload: handleGetHomeworksByCreatedTeacherSuccessResponse(response),
      });
    } catch (error) {
      dispatch({
        type: GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS,
        payload: handleGetHomeworksByCreatedTeacherUnsuccessResponse(error),
      });
    }
  };
};

export const createNewHomeworkAction = (homeworkData) => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_NEW_HOMEWORK_LOADING,
      payload: handleCreateNewHomeworkLoadingRequest(),
    });
    try {
      let response = await toast.promise(
        createNewHomework(homeworkData),
        homeworkPromiseToast("created")
      );
      dispatch({
        type: CREATE_NEW_HOMEWORK_SUCCESS,
        payload: handleCreateNewHomeworkSuccessResponse(response),
      });
    } catch (error) {
      dispatch({
        type: CREATE_NEW_HOMEWORK_UNSUCCESS,
        payload: handleCreateNewHomeworkUnsuccessResponse(error),
      });
    }
  };
};

export const deleteHomeworkByIdAction = (homeworkId) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_HOMEWORK_LOADING,
      payload: handleHomeworkDeleteLoadingRequest(),
    });
    try {
      let response = await toast.promise(
        deleteHomeworkById(homeworkId),
        homeworkPromiseToast("deleted")
      );
      dispatch({
        type: DELETE_HOMEWORK_SUCCESS,
        payload: handleHomeworkDeleteSuccessResponse(response),
      });
    } catch (error) {
      dispatch({
        type: DELETE_HOMEWORK_UNSUCCESS,
        payload: handleHomeworkDeleteUnsuccessResponse(error),
      });
    }
  };
};

export const updateHomeworkAction = (homeworkId, homeworkData) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_HOMEWORK_LOADING,
      payload: handleHomeworkUpdateLoading(),
    });
    try {
      let response = await toast.promise(
        updateHomeworkById(homeworkId, homeworkData),
        homeworkPromiseToast("updated")
      );
      dispatch({
        type: UPDATE_HOMEWORK_SUCCESS,
        payload: handleHomeworkUpdateSuccess(response),
      });
    } catch (error) {
      dispatch({
        type: UPDATE_HOMEWORK_UNSUCCESS,
        payload: handleHomeworkUpdateUnsuccess(error),
      });
    }
  };
};
