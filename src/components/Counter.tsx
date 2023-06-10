import { useCallback, useEffect, useState } from 'react';
import { getTotalUsers } from '../apis/main';
import CountUp from 'react-countup';

const TOTAL_USERS = 1219;

function Counter() {
  const [totalUsers, setTotalUsers] = useState(TOTAL_USERS);

  useEffect(() => {
    getTotalUsers().then((res) => {
      setTotalUsers(res.data.total_users);
    });
  }, []);

  const addCommas = useCallback((num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }, []);

  return (
    <p>
      현재까지 총
      <span className="text-pink-500">
        <CountUp end={totalUsers} duration={3.75} formattingFn={addCommas} />
      </span>
      명이 시험을 응시하셨습니다.
    </p>
  );
}

export default Counter;
