import { useLocation } from 'react-router-dom';
import Chart from '../components/Chart';
import {
  RATING_LIST,
  RATING_PERCENTAGE_LIST,
  RATING_RANGE_LIST_MOCKDATA,
} from '../constants/result';
import { AvgScoreType, RatingRangeType } from '../types/result';
import { useEffect, useState } from 'react';
import { getGradeRange, getScoreAvg } from '../apis/result';
import { calculateUserRating, getCurrentDate } from '../utils/result';

function ResultPage() {
  const { state: userData } = useLocation();
  const [avgData, setAvgData] = useState<AvgScoreType>({
    total_avg: 0,
    vocabulary_avg: 0,
    cogitation_avg: 0,
    intelligence_avg: 0,
    observation_avg: 0,
  });

  const [ratingRangeList, setRatingRangeList] = useState<RatingRangeType[]>(
    RATING_RANGE_LIST_MOCKDATA,
  );

  useEffect(() => {
    getScoreAvg().then((res) => {
      setAvgData(res.data);
    });
  }, []);

  useEffect(() => {
    getGradeRange().then((res) => {
      setRatingRangeList(res.data);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="flex flex-col gap-5 pt-16 px-4">
      <article className="flex flex-col items-center gap-4">
        <h5>
          <span className=" font-bold">{userData.name}</span> 님의 베라 능력고사
          등급은?
        </h5>
        <h1 className=" text-pink-500 text-4xl">
          {calculateUserRating(userData.total, ratingRangeList)}등급
        </h1>
        <div className=" text-xl  font-bold">내 점수</div>
        <div className=" text-pink-500 text-4xl">{userData.total}점</div>
      </article>
      <article className="-ml-6">
        <Chart userData={userData} avgData={avgData} />
      </article>
      <article>
        <div>( {getCurrentDate()} )</div>
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
            {ratingRangeList.map((item) => (
              <li key={item.grade}>
                {item.start}~{item.end}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center gap-1">
            <div>비율</div>
            {RATING_PERCENTAGE_LIST.map((item, i) => (
              <li
                className={`text-center bg-gray-300 ${
                  calculateUserRating(userData.total, ratingRangeList) ===
                    i + 1 && 'text-white bg-pink-500'
                }`}
                key={i}
                style={{ width: item.percentage * 5 + '%' }}
              >
                {item.percentage}%
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default ResultPage;
