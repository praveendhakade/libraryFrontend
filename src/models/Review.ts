class Review {
  id: number;
  userEmail: string;
  date: string;
  bookId: number;
  rating: number;
  reviewDescription: string;

  constructor(
    id: number,
    userEmail: string,
    date: string,
    bookId: number,
    rating: number,
    reviewDescription: string
  ) {
    this.id = id;
    this.userEmail = userEmail;
    this.bookId = bookId;
    this.date = date;
    this.rating = rating;
    this.reviewDescription = reviewDescription;
  }
}

export default Review;
