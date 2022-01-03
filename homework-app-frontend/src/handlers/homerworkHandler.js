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
    return true;
}

export const handleCreateNewHomeworkSuccessResponse = (response) => {
    return response.data
}

export const handleCreateNewHomeworkUnsuccessResponse = (error) => {
    return {
        message: error,
        status: error.response.status
    };
}

export const handleHomeworkDeleteLoadingRequest = () => {
    return true;
}

export const handleHomeworkDeleteSuccessResponse = (response) => {
    return response.data
}

export const handleHomeworkDeleteUnsuccessResponse = (error) => {
    return {
        message: error,
        status: error.response.status
    };
}

export const handleHomeworkUpdateLoading = () => {
    return true;
}

export const handleHomeworkUpdateSuccess = (response) => {
    return response.data;
}

export const handleHomeworkUpdateUnsuccess = (error) => {
    return {
        message: error,
        status: error.response.status
    };
}