export const getReviewAverage = (reviews: number[]) => {
  if (reviews.length === 0) return 0;
  return reviews.reduce((acc, review) => acc + review, 0) / reviews.length;
};

// acc + review is the accumulator plus the current review
// so it adds the current review to the accumulator
// to get the total sum of all reviews
// 0 is the initial value of the accumulator
// reviews.length is the total number of reviews
// reviews.reduce() is a method that reduces an array to a single value
