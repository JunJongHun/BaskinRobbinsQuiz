import { RatingRangeType } from '../types/result';

export const calculateUserRating = (
  userTotal: number,
  ratingRangeList: RatingRangeType[],
) => {
  const userRating = ratingRangeList.find(
    (ratingRange) =>
      userTotal <= ratingRange.start && userTotal >= ratingRange.end,
  );
  return userRating?.grade;
};

//현재 날짜 년,월,분 으로 반환해주는 함수
// 2023년 10월 오후 10시 10분 형식으로 반환
export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 기준`;
};
