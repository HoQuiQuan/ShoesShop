import { Injectable, Logger } from '@nestjs/common';
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);
  // Upload 1 file
  async uploadFile(
    file: Express.Multer.File,
    folder = 'uploads',
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'image',
        },
        (error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      streamifier.createReadStream(file.buffer).pipe(uploadStream);
    });
  }

  // Upload nhiều file cùng lúc
  async uploadFiles(
    files: Express.Multer.File[],
    folder = 'uploads',
  ): Promise<UploadApiResponse[]> {
    const uploadPromises = files.map((file) => this.uploadFile(file, folder));
    return Promise.all(uploadPromises);
  }

  async deleteFiles(publicIds: string[]): Promise<void> {
    if (!publicIds || publicIds.length === 0) {
      return;
    }

    try {
      const result = await cloudinary.api.delete_resources(publicIds);

      const failed = Object.entries(result.deleted || {}).filter(
        ([, status]) => status !== 'deleted',
      );

      if (failed.length > 0) {
        this.logger.warn(
          `Một số ảnh không xóa được: ${JSON.stringify(failed)}`,
        );
      }
    } catch (error) {
      this.logger.error(`Xóa ảnh trên Cloudinary thất bại: ${error}`);
      throw error;
    }
  }

  // Xóa ảnh (tuỳ chọn, hữu ích khi cần rollback hoặc xóa)
  async deleteFile(publicId: string): Promise<any> {
    return cloudinary.uploader.destroy(publicId);
  }
}
