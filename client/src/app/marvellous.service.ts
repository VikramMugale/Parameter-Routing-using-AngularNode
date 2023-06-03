import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetails } from './Details';
@Injectable({
  providedIn: 'root'
})
export class MarvellousService 
{
  public url : any = "http://localhost:5100/details";

  constructor(public mobj : HttpClient){}
  
  public GetDetails() : Observable<IDetails[]>
  {
    return this.mobj.get<IDetails[]>(this.url);
  }

}
