import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ImageUploadService} from '../../services/image-upload.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;

  files = [];
  projectForm = {
    name: '',
    description: '',
    endDate: '',
    photos: []
  }

  constructor(private uploadService: ImageUploadService,
              private tokenService: TokenService,
              private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['admin']);
    }
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService.uploadImages(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        console.log(event.body);
        this.projectForm.photos.push(event.body.link);
      }
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({data: file, inProgress: false, progress: 0});
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach((file) => {
      this.uploadFile(file);
    });
  }

  saveProject() {
    this.projectService.save(this.projectForm).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
