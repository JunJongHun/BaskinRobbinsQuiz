import { useEffect, useState } from 'react';
import { calculatePercentage, calculateScore, formatTime } from '../utils/quiz';
import { QUIZ_LIST, QUIZ_MAX_MINUTE } from '../constants/quiz';
import { useNavigate } from 'react-router-dom';
import { postUserData } from '../apis/quiz';
import { v4 as uuidv4 } from 'uuid';
import { UserAnswerType } from '../types/quiz';

const Timer = ({userAnswer , name} : {userAnswer:UserAnswerType; name:string}) => {
  const [timer, setTimer] = useState(QUIZ_MAX_MINUTE);
  const navigate = useNavigate();
 
  if (timer === 0)
  {
    alert('시간 초과입니다. 현재까지의 답안을 제출합니다.');
    const userData = calculateScore(userAnswer, QUIZ_LIST);
    postUserData({user_id:uuidv4(),name:'test',...userData}).then(()=>{
      navigate('/result',{state:{ ...userData,name}});
    });
  } 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <span>{formatTime(timer)}</span>
      <div className="h-2 w-full bg-gray-300 rounded-lg">
        <div
          className="h-full bg-green-500 rounded-lg"
          style={{ width: calculatePercentage(timer, QUIZ_MAX_MINUTE) + '%' }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
