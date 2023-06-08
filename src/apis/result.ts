import { axiosCustom } from './axiosCustom';

export const getScoreAvg = async () => {
  const response = await axiosCustom.get('average.php');
  return response;
};

export const getPercentage = async () => {
  const response = await axiosCustom.get('percentage.php');
  return response;
};
