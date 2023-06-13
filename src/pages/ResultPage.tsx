import { NavLink, useLocation } from 'react-router-dom';
import Chart from '../components/Chart';
import { RATING_LIST, RATING_RANGE_LIST } from '../constants/result';
import { AvgScoreType } from '../types/result';
import { useEffect, useState } from 'react';
import { getPercentage, getScoreAvg } from '../apis/result';
import { calculateUserRating } from '../utils/result';
import Loading from '../assets/loading.gif';
function ResultPage() {
  const { state: userData } = useLocation();
  const [avgData, setAvgData] = useState<AvgScoreType>({
    total_avg: 0,
    vocabulary_avg: 0,
    cogitation_avg: 0,
    intelligence_avg: 0,
    observation_avg: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [percentageList, setPercentageList] = useState({
    '1': '0',
    '2': '0',
    '3': '0',
    '4': '0',
    '5': '0',
    '6': '0',
    '7': '0',
    '8': '0',
    '9': '0',
  });

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getScoreAvg(), getPercentage()])
      .then((res) => {
        setAvgData(res[0].data);
        setPercentageList(res[1].data);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [avgData]);

  if (isLoading) {
    return <img className="mx-auto" src={Loading} alt="베라 아이콘" />;
  }

  if (error) {
    return <div>에러</div>;
  }

  return (
    <section className="flex flex-col gap-5 pt-16 px-4">
      <article className="flex flex-col items-center gap-4">
        <h5>
          <span className=" font-bold">{userData.name}</span> 님의 베라 능력고사
          등급은?
        </h5>
        <h1 className=" text-pink-500 text-4xl">
          {calculateUserRating(userData.total, RATING_RANGE_LIST)}등급
        </h1>
        <div className=" text-xl  font-bold">내 점수</div>
        <div className=" text-pink-500 text-4xl">{userData.total}점</div>
      </article>
      <article className="-ml-6">
        <Chart userData={userData} avgData={avgData} />
      </article>
      <article>
        <div>( 절대평가 기준 )</div>
        <div className="grid grid-cols-3 border border-black p-4">
          <ul className="flex flex-col items-center gap-1">
            <div>등급</div>
            {RATING_LIST.map((rating) => (
              <li className="" key={rating.grade}>
                {rating.grade}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center gap-1">
            <div>등급컷</div>
            {RATING_RANGE_LIST.map((item) => (
              <li key={item.grade}>
                {item.start}~{item.end}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center gap-1">
            <div>비율</div>
            {Object.values(percentageList).map((percentage, i) => (
              <li
                className={`flex justify-center text-center bg-gray-300 ${
                  calculateUserRating(userData.total, RATING_RANGE_LIST) ===
                    i + 1 && 'text-white bg-pink-500'
                }`}
                key={i}
                style={{ width: Number(percentage) * 4.5 + '%' }}
              >
                {percentage + '%'}
              </li>
            ))}
          </ul>
        </div>
      </article>
      <NavLink
        className="mb-8 flex justify-center items-center bg-pink-500  h-12 mt-4 text-white rounded-3xl "
        to={'/'}
      >
        테스트 다시하기
      </NavLink>
    </section>
  );
}

export default ResultPage;
