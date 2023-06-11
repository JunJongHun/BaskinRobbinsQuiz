import { useState } from 'react';
import { QUIZ_MAX_COUNT, QUIZ_LIST } from '../constants/quiz';
import { calculateScore, getTypeToKorean } from '../utils/quiz';
import Timer from '../components/Timer';
import { UserAnswerType } from '../types/quiz';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { postUserData } from '../apis/quiz';
import CheckIcon from '../assets/check.png';

function QuizPage() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { type, question, points,  choice } = QUIZ_LIST[page];
  const [userAnswer, setUserAnswer] = useState<UserAnswerType>({
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    A6: '',
    A7: '',
    A8: '',
    A9: '',
    A10: '',
    A11: '',
    A12: '',
  });

  const prePage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  return (
    <section className="flex flex-col items-center gap-4 pt-12 px-4 ">
      <article className="flex flex-col gap-6">
        <h3>2023년 베스킨라빈스 능력 시험</h3>
        <h1 className="text-3xl m-auto">{getTypeToKorean(type)}</h1>
      </article>
      <article className="flex flex-col w-full px-2 h-8  justify-between">
        <div className="flex justify-center items-center ">
          <div className="ml-auto border border-black py-1 px-2 rounded-2xl">
            {QUIZ_MAX_COUNT} 문제
          </div>
        </div>
        <Timer />
      </article>

      <article className="mt-6">
        <div>
          {page}. {question} [{points}점]
        </div>
        <img
          className="w-11/12 h-60 m-auto pb-8"
          src={`/${page}.png`}
          alt="문제 이미지"
        />
        <ul className=" grid grid-cols-2 gap-2">
          {choice.map(({ id, option }, index) => (
            <li
              className="flex items-center"
              key={id}
              onClick={() => {
                const newUserAnswer = { ...userAnswer };
                newUserAnswer[`A${page}`] = String(index + 1);
                setUserAnswer(newUserAnswer);
              }}
            >
              <span className=" relative flex justify-center items-center w-5 h-5 rounded-full border border-black mr-1">
                {index + 1}
                {userAnswer['A' + page] === String(index + 1) && (
                  <img
                    className=" absolute translate-x-1/4 -translate-y-1/2  w-8 h-6"
                    src={CheckIcon}
                  />
                )}
              </span>
              {option}
            </li>
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
        {page !== QUIZ_MAX_COUNT ? (
          <button
            className=" bg-gray-300 w-20 h-8 text-gray-500 rounded-3xl disabled:invisible"
            onClick={nextPage}
            disabled={page === QUIZ_MAX_COUNT}
          >
            다음
          </button>
        ) : (
          <button
            className=" bg-pink-500 w-20 h-8  text-white rounded-3xl "
            onClick={async () => {
              const uuid = uuidv4();
              const userData = calculateScore(userAnswer, QUIZ_LIST);

              await postUserData({
                user_id: uuid,
                name: location.state.name,
                ...userData,
              });

              navigate('/result', {
                state: { ...userData, ...location.state },
              });
            }}
          >
            제출
          </button>
        )}
      </article>
    </section>
  );
}

export default QuizPage;
