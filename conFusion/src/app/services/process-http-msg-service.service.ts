import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpMsgServiceService {


  constructor(private http: HttpClient) { }


}
