export const handleGetHomeworksByCreatedTeacherLoadingRequest = () => {
    return true;
}

export const handleGetHomeworksByCreatedTeacherSuccessResponse = (response) => {
    return response.data
}

export const handleGetHomeworksByCreatedTeacherUnsuccessResponse = (error) => {
    return {
        message: error,
        status: error.response.status
    }
}

export const handleCreateNewHomeworkLoadingRequest = () => {
    return {isLoading: true}
}

export const handleCreateNewHomeworkSuccessResponse = (response) => {
    console.log(response)
}

export const handleCreateNewHomeworkUnsuccessResponse = (error) => {
    return error.response.status
}

export const newHomeworkCreationPromiseToast = () => {
    return {
        pending: 'Homework is being created.',
        success: 'Homework created successfully 👌',
        error: 'Something went wrong 🤯'
    }
}