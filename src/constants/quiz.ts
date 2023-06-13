import { QuizListTYPE } from '../types/quiz';
import Quiz1 from '../assets/1.png';
import Quiz2 from '../assets/2.png';
import Quiz3 from '../assets/3.png';
import Quiz4 from '../assets/4.png';
import Quiz5 from '../assets/5.png';
import Quiz6 from '../assets/6.png';
import Quiz7 from '../assets/7.png';
import Quiz8 from '../assets/8.png';
import Quiz9 from '../assets/9.png';
import Quiz10 from '../assets/10.png';
import Quiz11 from '../assets/11.png';
import Quiz12 from '../assets/12.png';


export const QUIZ_MAX_COUNT = 12;
export const QUIZ_MAX_MINUTE = 5* 60;

export const QUIZ_LIST: QuizListTYPE = {
  '1': {
    quizId: 1,
    type: 'observation',
    points: 8,
    question: '다음 중 아이스크림 표기가 알맞은 것은 무엇인가요?',
    imageUrl: Quiz1,
    choice: [
      { id: 1, option: '엄마는 외계인' },
      { id: 2, option: '아몬드 봉봉' },
      { id: 3, option: '뉴욕 치즈케이크' },
      { id: 4, option: '레인보우 샤베트' },
      { id: 5, option: '슈팅스타' },
    ],
    answer: 5,
  },
  '2': {
    quizId: 1,
    type: 'observation',
    points: 8,
    question: '다음 중 아이스크림 표기가 알맞은 것은 무엇인가요?',
    imageUrl: Quiz2,
    choice: [
      { id: 1, option: '슈팅소다' },
      { id: 2, option: '뉴욕 인 치즈케이크' },
      { id: 3, option: '아몬드 붕붕' },
      { id: 4, option: '민트 초코' },
      { id: 5, option: '바람과 함께 사라질까' },
    ],
    answer: 4,
  },
  '3': {
    quizId: 3,
    type: 'observation',
    points: 9,
    question: '다음 중 아이스크림 표기가 알맞은 것은 무엇인가요?',
    imageUrl: Quiz3,
    choice: [
      { id: 1, option: '초콜릿 무스' },
      { id: 2, option: '엄마는 외계인' },
      { id: 3, option: '초코넛 마카다미아' },
      { id: 4, option: '블랙 소르베' },
      { id: 5, option: '블랙 슈가 밤' },
    ],
    answer: 3,
  },
  '4': {
    quizId: 4,
    type: 'cogitation',
    points: 8,
    question: '다음 중 싱글레귤러 가격으로 알맞은 것은 무엇인가요?',
    imageUrl: Quiz4,
    choice: [
      { id: 1, option: '3,600원' },
      { id: 2, option: '3,500원' },
      { id: 3, option: '3,400원' },
      { id: 4, option: '3,300원' },
      { id: 5, option: '3,250원' },
    ],
    answer: 2,
  },
  '5': {
    quizId: 5,
    type: 'cogitation',
    points: 8,
    question: '다음 중 파인트(세가지 맛) 가격으로 알맞은 것은 무엇인가요?',
    imageUrl: Quiz5,
    choice: [
      { id: 2, option: '8,900원' },
      { id: 1, option: '8,990원' },
      { id: 3, option: '8,500원' },
      { id: 4, option: '8,300원' },
      { id: 5, option: '8,200원' },
    ],
    answer: 2,
  },
  '6': {
    quizId: 6,
    type: 'cogitation',
    points: 9,
    question: '다음 중 패밀리 맛 가지 수로 알맞은 것은 무엇인가요?',
    imageUrl: Quiz6,
    choice: [
      { id: 1, option: '4개' },
      { id: 2, option: '5개' },
      { id: 3, option: '6개' },
      { id: 4, option: '7개' },
      { id: 5, option: '8개' },
    ],
    answer: 2,
  },
  '7': {
    quizId: 7,
    type: 'intelligence',
    points: 8,
    question: '다음 중 사진의 명칭으로 올바른 것은 무엇인가요?',
    imageUrl: Quiz7,
    choice: [
      { id: 1, option: '패밀리팩' },
      { id: 2, option: '레디팩' },
      { id: 3, option: '핸드팩세트' },
      { id: 4, option: '4인가족세트' },
      { id: 5, option: '모두세트' },
    ],
    answer: 3,
  },
  '8': {
    quizId: 8,
    type: 'intelligence',
    points: 8,
    question:
      '다음 중 인기가 가장 많은 아이스크림은 무엇인가요? (2023년 6월 기준)',
    imageUrl: Quiz8,
    choice: [
      { id: 1, option: '슈팅스타' },
      { id: 2, option: '시카고 팝콘' },
      { id: 3, option: '아몬드 봉봉' },
      { id: 4, option: '이상한 나라의 솜사탕' },
      { id: 5, option: '뉴욕 치즈케이크' },
    ],
    answer: 2,
  },
  
  '9': {
    quizId: 9,
    type: 'intelligence',
    points: 9,
    question: '이 아이스크림의 재료가 아닌 것으로 옳은 것은 무엇인가요?',
    imageUrl: Quiz9,
    choice: [
      { id: 1, option: '오레오' },
      { id: 2, option: '쿠키' },
      { id: 3, option: '크림' },
      { id: 4, option: '땅콩' },
      { id: 5, option: '치즈' },
    ],
    answer: 4,
  },
  '10': {
    quizId: 10,
    type: 'vocabulary',
    points: 8,
    question: '다음 아이스크림 명칭으로 알맞은 것은 무엇인가요?',
    imageUrl: Quiz10,
    choice: [
      { id: 1, option: '체리지빌레' },
      { id: 2, option: '체리줘빌레' },
      { id: 3, option: '체리스빌레' },
      { id: 4, option: '체리조빌레' },
      { id: 5, option: '체리쥬빌레' },
    ],
    answer: 5,
  },
  '11': {
    quizId: 11,
    type: 'vocabulary',
    points: 8,
    question: '다음 아이스크림의 명칭으로 알맞은 것은 무엇인가요?',
    imageUrl: Quiz11,
    choice: [
      { id: 1, option: '잠올까 아몬드 훠지' },
      { id: 2, option: '자모카 아몬드 훠지' },
      { id: 3, option: '잠깐만 아몬드 훠지' },
      { id: 4, option: '자메이카 아몬드 훠지' },
      { id: 5, option: '자모키 아몬드 훠지' },
    ],

    answer: 2,
  },
  '12': {
    quizId: 12,
    type: 'vocabulary',
    points: 9,
    question: '다음 아이스크림의 명칭으로 알맞은 것은 무엇인가요?',
    imageUrl: Quiz12,
    choice: [
      { id: 1, option: '파팡파팡 바나나' },
      { id: 2, option: '파핑파핑 바나나' },
      { id: 3, option: '퍼핑퍼핑 바나나' },
      { id: 4, option: '파피파피 바나나' },
      { id: 5, option: '파바바팡 바나나' },
    ],
    answer: 2,
  },
};
