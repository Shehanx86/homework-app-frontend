import { getHomeworksByCreatedTeacher } from "../../api/homeworkAPI";
import { handleGetHomeworksByCreatedTeacherLoadingRequest, handleGetHomeworksByCreatedTeacherSuccessResponse, handleGetHomeworksByCreatedTeacherUnsuccessResponse } from "../../service/homeworkService";
import { GET_HOMEWORK_BY_CREATED_TEACHER_LOADING, GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS, GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS } from "./homeworkActionTypes";

export const getHomeworksByCreatedTeacherAction = () => {
    console.log('Brearer ')
    return async (dispatch) => {
        dispatch({
            type: GET_HOMEWORK_BY_CREATED_TEACHER_LOADING,
            payload: handleGetHomeworksByCreatedTeacherLoadingRequest()
        })
        try {
            let response = await getHomeworksByCreatedTeacher();
            dispatch({
                type: GET_HOMEWORK_BY_CREATED_TEACHER_SUCCESS,
                payload: handleGetHomeworksByCreatedTeacherSuccessResponse(response)
            })
        } catch(error) {
            dispatch({
                type: GET_HOMEWORK_BY_CREATED_TEACHER_UNSUCCESS,
                payload: handleGetHomeworksByCreatedTeacherUnsuccessResponse(error)
            })
        }
    }
}