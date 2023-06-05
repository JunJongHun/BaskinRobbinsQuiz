import { QUIZ_LIST_TYPE, UserAnswerType } from '../types/quiz';

export const getTypeToKorean = (type: string): string => {
  switch (type) {
    case 'vocabulary':
      return '어휘력';
    case 'cogitation':
      return '사고력';
    case 'intelligence':
      return '정보력';
    case 'observation':
      return '관찰력';
    default:
      return '잘못된 키워드입니다.';
  }
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    minutes.toString().padStart(2, '0') +
    ':' +
    remainingSeconds.toString().padStart(2, '0') +
    '초';

  return formattedTime;
};

export const calculatePercentage = (numerator: number, denominator: number) => {
  if (denominator === 0) {
    throw new Error('분모는 0이 될 수 없습니다.');
  }

  const percentage = (numerator / denominator) * 100;
  return percentage.toFixed(2);
};

export const calculateScore = (
  userAnswer: UserAnswerType,
  quizList: QUIZ_LIST_TYPE,
) => {
  let total = 0;
  let vocabulary = 0;
  let cogitation = 0;
  let intelligence = 0;
  let observation = 0;

  for (let i = 1; i <= Object.keys(quizList).length; i++) {
    if (userAnswer['A' + i] === quizList[i].answer.toString()) {
      if (quizList[i].type === 'vocabulary') vocabulary += quizList[i].points;
      if (quizList[i].type === 'cogitation') cogitation += quizList[i].points;
      if (quizList[i].type === 'intelligence')
        intelligence += quizList[i].points;
      if (quizList[i].type === 'observation') observation += quizList[i].points;

      total += quizList[i].points;
    }
  }

  return { total, vocabulary, cogitation, intelligence, observation };
};
