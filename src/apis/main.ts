import { axiosCustom } from './axiosCustom';

// 이 부분은 php 서버로 보내는 부분이므로, 추후에 서버를 node.js로 구현할 때 수정해야 함
export const getTotalUsers = async () => {
  // post가 안되서 일단 get으로 보냄
  const response = await axiosCustom.get('users.php');
  return response;
};
