import { useEffect, useRef, useState } from 'react';
import { PRECAUTION_LIST } from '../constants/text';
import { useNavigate } from 'react-router-dom';
import Counter from '../components/Counter';

function MainPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 pt-12 px-4 ">
      <article className="flex flex-col gap-6">
        <h3>{new Date().getFullYear()}년 베스킨라빈스 능력 시험</h3>
        <h1 className="text-3xl m-auto">베라 탐구 영역</h1>
      </article>
      <article className="flex w-full h-8 justify-between">
        <div className="flex justify-center items-center border border-black w-5/12">
          <div className="flex justify-center items-center w-1/3 h-full  border-r border-black">
            이름
          </div>
          <input
            className=" w-2/3 px-2 outline-none bg-inherit"
            type="text"
            ref={ref}
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className=" w-6/12 flex border border-black">
          <div className="flex justify-center items-center w-2/5 border-r border-black">
            수험번호
          </div>
          <div className="flex justify-center items-center w-3/5">
            98529B57BC
          </div>
        </div>
      </article>
      <span>※ 시험이 시작되기 전 아래 유의사항을 꼼꼼히 확인하세요</span>
      <article className="border border-black px-2 py-4">
        <ul className="flex flex-col gap-3 list-disc list-inside">
          {PRECAUTION_LIST.map((precaution, i) => (
            <li className="text-sm -indent-5 pl-7" key={i}>
              {precaution}
            </li>
          ))}
        </ul>
      </article>
      <button
        className="flex justify-center items-center text-white bg-pink-500 -mt-8 w-full h-11 "
        onClick={() => {
          if (name === '') ref.current?.focus();
          else navigate('/quiz', { state: { name } });
        }}
      >
        시험 시작하기
      </button>
      <Counter />
      <p className="  bg-zinc-300 py-2 border border-black w-full text-center">
        수험생 여러분 모두 수고하셨습니다.
      </p>
    </section>
  );
}

export default MainPage;
