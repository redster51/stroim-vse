import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ImageUploadService} from '../../services/image-upload.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;

  files = [];
  projectList = [];
  newProject = {
    name: '',
    description: '',
    endDate: '',
    photos: []
  };


  constructor(private uploadService: ImageUploadService,
              private tokenService: TokenService,
              private fb: FormBuilder,
              private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (!this.tokenService.getToken()) {
      this.router.navigate(['vanya-login']);
    } else {
      this.updateProjectList();
    }
  }

  private updateProjectList(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projectList = [];
      projects.forEach((project) => {
        const projectForm = this.fb.group({
          name: [project.name],
          description: [project.description],
          endDate: [project.endDate],
          id: [project._id]
        });
        this.projectList.push(projectForm);
      });
    }, (error) => {
      console.log(error);
    });
  }

  updateProject(project): void {
    if (confirm('Вы уверены, что хотите внести эти изменения в текущий проект?')) {
      this.projectService.updateProject(project.value).subscribe((data) => {
        this.updateProjectList();
        alert('Данные успешно обновлены!');
      }, error => {
        console.error(error);
      });
    }
  }

  deleteProject(projectId): void {
    if (confirm('Вы уверены, что хотите удалить этот проект?')) {
      this.projectService.deleteProject(projectId).subscribe(data => {
        console.log(data);
        this.updateProjectList();
        alert('Проект успешно удален!');
      }, error => {
        console.error(error);
      });
    }
  }

  private uploadFile(file) {
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
        this.newProject.photos.push(event.body.link);
        //Автоматическая загрузка нового проекта должна делаться с этого момента!!!
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
    this.projectService.save(this.newProject).subscribe((data) => {
      this.clearNewProjectForm();
      this.updateProjectList();
      alert('Новый проект успешно добавлен!');
    }, error => {
      console.log(error);
      alert('Произошла непредвиденная ошибка. Проверьте консоль...')
    });
  }

  private clearNewProjectForm(): void {
    this.files = [];
    this.newProject = {
      name: '',
      description: '',
      endDate: '',
      photos: []
    };
  }
}
