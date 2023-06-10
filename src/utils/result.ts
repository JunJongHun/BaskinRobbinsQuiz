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
