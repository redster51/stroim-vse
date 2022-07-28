import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  SERVER_URL: string = '/api/api';

  constructor(private http: HttpClient) {
  }

  uploadImages(formData) {
    return this.http.post<any>(`${this.SERVER_URL}/images`,
      formData,
      {reportProgress: true, observe: 'events'});
  }
}
