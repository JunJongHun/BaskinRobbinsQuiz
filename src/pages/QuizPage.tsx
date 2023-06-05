import { useState } from 'react';
import { QUIZ_MAX_COUNT, QUIZ_LIST } from '../constants/quiz';

function QuizPage() {
  const [page, setPage] = useState(1);

  const prePage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  return (
    <section className="flex flex-col items-center gap-8 pt-32 px-4 ">
      <article className="flex flex-col gap-6">
        <h3>2023년 베스킨라빈스 능력 시험</h3>
        <h1 className="text-3xl m-auto">{QUIZ_LIST[page].type}</h1>
      </article>
      <article className="flex flex-col w-full h-8 justify-between">
        <div className="flex justify-between">
          <span>14 : 51</span>
          <div>{QUIZ_MAX_COUNT} 문제</div>
        </div>
        <progress className="w-full " value="50" max="100" />
      </article>
      <div className="border border-black w-full"></div>
      <article className="">
        <div>
          {page}. {QUIZ_LIST[page].question} [{QUIZ_LIST[page].points}점]
        </div>
        <img
          className="m-auto"
          src={QUIZ_LIST[page].imageUrl}
          alt="문제 이미지"
        />
        <ul className=" list-decimal">
          {QUIZ_LIST[page].choice.map(({ id, option }) => (
            <li key={id}>{option}</li>
          ))}
        </ul>
      </article>
      <article className="flex justify-between items-center w-full px-8">
        <button
          className="bg-gray-300 w-20 h-8 text-gray-500 rounded-3xl disabled:invisible"
          onClick={prePage}
          disabled={page === 1}
        >
          이전
        </button>
        <div>
          {page} / {QUIZ_MAX_COUNT}
        </div>
        <button
          className=" bg-gray-300 w-20 h-8 text-gray-500 rounded-3xl disabled:invisible"
          onClick={nextPage}
          disabled={page === QUIZ_MAX_COUNT}
        >
          다음
        </button>
      </article>
    </section>
  );
}

export default QuizPage;
