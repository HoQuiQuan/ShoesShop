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
  meta?: any;
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
        let responseData: any = data;
        let meta: any = undefined;

        if (data && typeof data === 'object') {
          const dataObj = data as Record<string, unknown>;

          // 🔥 override message nếu có
          if ('message' in dataObj && typeof dataObj.message === 'string') {
            finalMessage = dataObj.message;
          }

          // 🔥 extract data + meta
          if ('data' in dataObj) {
            responseData = dataObj.data;
          }

          if ('meta' in dataObj) {
            meta = dataObj.meta;
          }

          // 🔥 nếu không có data wrapper
          if (!('data' in dataObj)) {
            const rest = dataObj;
            delete rest.message;

            responseData = Object.keys(rest).length > 0 ? rest : [];
          }
        }

        return {
          success: true,
          message: finalMessage,
          data: responseData as T,
          meta, // 🔥 thêm vào response
          date: new Date(),
          path: request.url,
        };
      }),
    );
  }
}
