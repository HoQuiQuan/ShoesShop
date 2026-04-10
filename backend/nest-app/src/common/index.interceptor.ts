import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
  date: Date;
  path: string;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<
  T,
  Response<T>
> {
  private getDefaultMessage(method: string): string {
    switch (method) {
      case 'POST':
        return 'Tạo mới thành công.';
      case 'GET':
        return 'Lấy dữ liệu thành công.';
      case 'DELETE':
        return 'Xóa thành công.';
      case 'PUT':
      case 'PATCH':
        return 'Cập nhật thông tin thành công.';
      default:
        return 'Yêu cầu đã hoàn thành';
    }
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      map((data: unknown) => {
        let finalMessage = this.getDefaultMessage(request.method);
        let responseData = data;

        if (data && typeof data === 'object') {
          const dataObj = data as Record<string, unknown>;

          if ('message' in dataObj && typeof dataObj.message === 'string') {
            finalMessage = dataObj.message;

            const rest = { ...dataObj };
            delete rest.message;

            responseData = Object.keys(rest).length > 0 ? rest : undefined;
          }

          if (
            responseData &&
            typeof responseData === 'object' &&
            'data' in (responseData as Record<string, unknown>)
          ) {
            responseData = (responseData as Record<string, unknown>).data;
          }
        }

        return {
          success: true,
          message: finalMessage,
          data: responseData as T,
          date: new Date(),
          path: request.url,
        };
      }),
    );
  }
}
