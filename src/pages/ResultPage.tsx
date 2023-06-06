import Chart from '../components/Chart';
import {
  RATING_LIST,
  RATING_PERCENTAGE_LIST,
  RATING_RANGE_LIST_MOCKDATA,
} from '../constants/result';

function ResultPage() {
  return (
    <section className="flex flex-col gap-5 pt-16 px-4">
      <article className="flex flex-col items-center gap-4">
        <h5>OOO 님의 베라 능력고사 등급은?</h5>
        <h1 className=" text-pink-500 text-4xl">1등급</h1>
        <div className=" text-xl  font-bold">내 점수</div>
        <div className=" text-pink-500 text-4xl">91점</div>
      </article>
      <article className="-ml-6">
        <Chart />
      </article>
      <article>
        <div>( 4월 16일 2시 23분 기준 )</div>
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
            {RATING_RANGE_LIST_MOCKDATA.map((item) => (
              <li key={item.grade}>
                {item.start}~{item.end}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center gap-1">
            <div>비율</div>
            {RATING_PERCENTAGE_LIST.map((item, i) => (
              <li
                className="text-center bg-gray-300"
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
