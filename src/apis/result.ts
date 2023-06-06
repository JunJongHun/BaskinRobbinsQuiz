import { axiosCustom } from './axiosCustom';

export const getScoreAvg = async () => {
  const response = await axiosCustom.get('/scores');
  return response;
};

export const postUserData = async (userData: any) => {
  const response = await axiosCustom.post('/users', userData);
  return response;
};

export const getGradeRange = async () => {
  const response = await axiosCustom.get('/grades');
  return response;
};
