import axiosConfig from "../config/axiosConfig";

export const getHomeworksByCreatedTeacher = () => {
    return axiosConfig.get('/homework/teacher');
}

export const createNewHomework = (homeworkData) => {
    return axiosConfig.post('/homework/',homeworkData);
}