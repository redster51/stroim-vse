import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiURI = '/api/api';
  constructor(private http: HttpClient) { }

  save(project): Observable<any> {
    return this.http.post(`${this.apiURI}/projects`, project);
  }

  getProjects(): Observable<any> {
    return this.http.get(`${this.apiURI}/projects`);
  }

  updateProject(project): Observable<any> {
    return this.http.put(`${this.apiURI}/projects/${project.id}`, project);
  }

  deleteProject(projectId): Observable<any> {
    return this.http.delete(`${this.apiURI}/projects/${projectId}`);
  }
}
