import axiosConfig from "../config/axiosConfig";

export const getHomeworksByCreatedTeacher = () => {
    return axiosConfig.get('/homework/teacher');
}