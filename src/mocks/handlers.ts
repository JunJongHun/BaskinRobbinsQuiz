import { rest } from 'msw';

export const handlers = [
  // 응시자 정보 보내기
  rest.post('/users', (req, res, ctx) => {
    console.log(req.body);
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    );
  }),

  // 전제 응시자 점수 평균 조회
  rest.get('/scores', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        total_avg: 70,
        vocabulary_avg: 23,
        cogitation_avg: 25,
        intelligence_avg: 16,
        observation_avg: 18,
      }),
    );
  }),

  // 등급컷 조회
  rest.get('/grades', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { grade: 1, start: 100, end: 90 },
        { grade: 2, start: 89, end: 80 },
        { grade: 3, start: 79, end: 70 },
        { grade: 4, start: 69, end: 60 },
        { grade: 5, start: 59, end: 50 },
        { grade: 6, start: 49, end: 40 },
        { grade: 7, start: 39, end: 30 },
        { grade: 8, start: 29, end: 20 },
        { grade: 9, start: 19, end: 10 },
      ]),
    );
  }),
];
