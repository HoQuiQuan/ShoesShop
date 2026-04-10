export interface JwtPayload {
  customerId: number;
  email: string;
  iat?: number;
  exp?: number;
}
