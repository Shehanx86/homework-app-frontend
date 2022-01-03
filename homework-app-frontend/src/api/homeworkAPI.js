import axiosConfig from "../config/axiosConfig";

export const getHomeworksByCreatedTeacher = () => {
    return axiosConfig.get('/homework/teacher');
}

export const createNewHomework = (homeworkData) => {
    return axiosConfig.post('/homework/',homeworkData);
}

export const deleteHomeworkById = (homeworkId) => {
    return axiosConfig.delete('/homework/'+homeworkId);
}

export const updateHomeworkById = (homeworkId, homeworkData) => {
    return axiosConfig.put('/homework/'+homeworkId, homeworkData);
}