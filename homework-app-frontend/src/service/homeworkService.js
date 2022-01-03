export const handleGetHomeworksByCreatedTeacherLoadingRequest = () => {
    return true;
}

export const handleGetHomeworksByCreatedTeacherSuccessResponse = (response) => {
    return response.data;
}

export const handleGetHomeworksByCreatedTeacherUnsuccessResponse = (error) => {
    return {
        message: error,
        status: error.response.status
    };
}

export const handleCreateNewHomeworkLoadingRequest = () => {
    return {isLoading: true};
}

export const handleCreateNewHomeworkSuccessResponse = (response) => {
    console.log(response.body)
    return response.body
}

export const handleCreateNewHomeworkUnsuccessResponse = (error) => {
    return error.response.status
}

export const handleHomeworkDeleteLoadingRequest = () => {
    return true;
}

export const handleHomeworkDeleteSuccessResponse = (response) => {
    console.log(response)
    return response.body
}

export const handleHomeworkDeleteUnsuccessResponse = (error) => {
    return error.response.status
}