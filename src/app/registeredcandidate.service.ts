// import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteredcandidateService {


  ServerUrl = 'http://34.70.126.62:4000/';

  constructor( private http:Http ) { }

  dummylisting(){
    return this.http.get(this.ServerUrl + 'dummylisting')
  }

  getnote(user_id){
    return this.http.get(this.ServerUrl + 'getCandidateNotes?userId='+user_id)
  }

  Add_Cand(user_id,obj,adminid){
    return this.http.get(this.ServerUrl + 'addCandidateNotes?message='+obj+' &userId='+user_id+'&adminid='+adminid)
  
  
  }

  edit(user_id,obj,noteId){
    return this.http.get(this.ServerUrl + 'updateCandidateNotes?userId='+user_id+'&message='+obj+'&noteId='+noteId)
  }

  // message, userId, noteId 


  Delete(id) {
     return this.http.delete( this.ServerUrl + 'removeCandidateNotes?noteId='+id )
  }


  


}
