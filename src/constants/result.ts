import {
  RatingPercentageType,
  RatingRangeType,
  RatingType,
} from '../types/result';

export const RATING_LIST: RatingType[] = [
  { grade: 1 },
  { grade: 2 },
  { grade: 3 },
  { grade: 4 },
  { grade: 5 },
  { grade: 6 },
  { grade: 7 },
  { grade: 8 },
  { grade: 9 },
];

export const RATING_RANGE_LIST_MOCKDATA: RatingRangeType[] = [
  { grade: 1, start: 100, end: 90 },
  { grade: 2, start: 89, end: 80 },
  { grade: 3, start: 79, end: 70 },
  { grade: 4, start: 69, end: 60 },
  { grade: 5, start: 59, end: 50 },
  { grade: 6, start: 49, end: 40 },
  { grade: 7, start: 39, end: 30 },
  { grade: 8, start: 29, end: 20 },
  { grade: 9, start: 19, end: 10 },
];

export const RATING_PERCENTAGE_LIST: RatingPercentageType[] = [
  { percentage: 4 },
  { percentage: 7 },
  { percentage: 12 },
  { percentage: 17 },
  { percentage: 20 },
  { percentage: 17 },
  { percentage: 12 },
  { percentage: 7 },
  { percentage: 4 },
];
