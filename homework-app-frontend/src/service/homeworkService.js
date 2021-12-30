import axios from "axios"

export const handleGetHomeworksByCreatedTeacherLoadingRequest = () => {
    return { isLoading: true}
}

export const handleGetHomeworksByCreatedTeacherSuccessResponse = (response) => {
    return response.data
}

export const handleGetHomeworksByCreatedTeacherUnsuccessResponse = (error) => {
    return error.response.status
}
