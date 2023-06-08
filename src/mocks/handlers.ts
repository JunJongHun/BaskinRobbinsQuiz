import { rest } from 'msw';

export const handlers = [
  // 응시자 정보 보내기
  rest.get('/info', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
    );
  }),

  // 전제 응시자 점수 평균 조회
  rest.get('/average', (req, res, ctx) => {
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
  rest.get('/percentage', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        '1': 11.24,
        '2': 10.81,
        '3': 9.74,
        '4': 10.09,
        '5': 10.31,
        '6': 9.59,
        '7': 10.59,
        '8': 8.3,
        '9': 19.33,
      }),
    );
  }),

  // 응시자 수 조회
  rest.get('/users', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({ total_users: '1397' }),
    );
  }),
];
