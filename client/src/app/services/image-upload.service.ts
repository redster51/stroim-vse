import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpEventType} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  SERVER_URL: string = 'https://file.io/?expires=10y';

  constructor(private http: HttpClient) {
  }

  uploadImages(formData) {
    return this.http.post<any>(this.SERVER_URL,
      formData,
      {reportProgress: true, observe: 'events'});
  }
}
