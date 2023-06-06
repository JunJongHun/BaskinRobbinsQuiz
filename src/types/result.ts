export type RatingType = { grade: number };

export type RatingRangeType = { grade: number; start: number; end: number };

export type RatingPercentageType = { percentage: number };

export type AvgScoreType = {
  total_avg: number;
  vocabulary_avg: number;
  cogitation_avg: number;
  intelligence_avg: number;
  observation_avg: number;
};
