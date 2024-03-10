export default class Review {
  constructor({ id, driver, passenger, rating, review }) {
    this.id = id;
    this.passenger = passenger;
    this.driver = driver;
    this.rating = rating;
    this.review = review;
  }

  static fromReviews(reviews) {
    const reviewArray = [];
    reviews?.map((review) => {
      reviewArray.push(
        new Review({
          id: review.id,
          passenger: review.passenger_id,
          driver: review.driver_id,
          rating: review.rating,
          review: review.review,
        })
      );
      return null;
    });
    return reviewArray;
  }
}
