export type QuizListTYPE = {
  [key: string]: {
    quizId: number;
    type: string;
    points: number;
    question: string;
    imageUrl: string;
    choice: { id: number; option: string }[];
    answer: number;
  };
};

export type UserAnswerType = {
  [key: string]: string;
};
