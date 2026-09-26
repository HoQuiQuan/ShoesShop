import { api } from "@/lib/axios";

export interface CreateComment {
  orderDetailId: number;
  content: string;
}

export interface CreateReview {
  orderDetailId: number;
  rating: number;
  content?: string;
}

interface GetProductReviewsParams {
  page?: number;
  limit?: number;
  rating?: number;
}

export default class ReviewApi {
  public static async createComment(data: CreateComment) {
    return await api.post(
      `reviews/comment`,
      { ...data },
      { withCredentials: true },
    );
  }

  public static async createReview(
    orderDetailId: number,
    rating: number,
    content?: string,
  ) {
    return await api.post(
      "reviews/review",
      { orderDetailId, rating, content },
      { withCredentials: true },
    );
  }

  public static async getProductReviews(
    productId: number,
    params?: GetProductReviewsParams,
  ) {
    return api.get(`/reviews/product/${productId}`, {
      params,
    });
  }
}
