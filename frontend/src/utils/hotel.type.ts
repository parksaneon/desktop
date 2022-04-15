export type Hotel = {
  id: string;
  name: string;
  starRating?: string;
  guestReviews?: {
    rating: number;
    total: number;
  };
  ratePlan?: {
    price: {
      exactCurrent: number;
    };
  };
};
