import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import data from '../../assets/proyectos.json'
@Injectable({
  providedIn: 'root'
})
export class InfoProyectosService {

  constructor(public _http: HttpClient) { }

}
