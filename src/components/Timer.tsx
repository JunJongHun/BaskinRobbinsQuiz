import { useEffect, useState } from 'react';
import { calculatePercentage, formatTime } from '../utils/quiz';
import { QUIZ_MAX_MINUTE } from '../constants/quiz';

const Timer = () => {
  const [timer, setTimer] = useState(QUIZ_MAX_MINUTE);

  if (timer === 0) alert('시간이 초과되었습니다.');

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
      {/* <progress
        className="w-full h-2 appearance-none border-none rounded-2xl bg-orange-500 "
        value={timer}
        max={300}
      ></progress> */}
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
