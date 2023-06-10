import { postUserData } from '../apis/quiz';
import { v4 as uuidv4 } from 'uuid';

export const postUserDummy = () => {
  for (let i = 0; i < 700; i++) {
    const name = 'user' + i;
    const user_id = uuidv4();
    // 0~100 점수 무작위로 생성
    const total = Math.floor(Math.random() * 101);
    const vocabulary = Math.floor(Math.random() * 26);
    const cogitation = Math.floor(Math.random() * 26);
    const intelligence = Math.floor(Math.random() * 26);
    const observation = Math.floor(Math.random() * 26);

    console.log('user_id', user_id);
    console.log('name', name);
    console.log('total', total);
    console.log('vocabulary', vocabulary);
    console.log('cogitation', cogitation);
    console.log('intelligence', intelligence);
    console.log('observation', observation);

    postUserData({
      user_id,
      name,
      total,
      vocabulary,
      cogitation,
      intelligence,
      observation,
    }).then((res) => console.log(res));
  }
};
