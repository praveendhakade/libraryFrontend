import { NavigateFunction } from "react-router-dom";
import Review from "../models/Review";
import { baseService } from "./baseService";
import { IApiResponse } from "../types/heros";

class ReveiwService {
  private baseService = baseService;

  async getReviewsAsync(
    bookId: string,
    navigate: NavigateFunction
  ): Promise<Review[]> {
    return this.baseService.get(`/reviews/${bookId}`, navigate);
  }

  async addReveiw(
    review: Review,
    navigate: NavigateFunction
  ): Promise<IApiResponse<Review>> {
    return this.baseService.post(`/add/reviews`, navigate, review);
  }
}

export const reviewService = new ReveiwService();
