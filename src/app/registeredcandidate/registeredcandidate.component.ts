import { Component, OnInit } from '@angular/core';
import {RegisteredcandidateService} from '../registeredcandidate.service';
 
import { AngularEditorConfig } from '@kolkov/angular-editor';

declare var $;

@Component({
  selector: 'app-registeredcandidate',
  templateUrl: './registeredcandidate.component.html',
  styleUrls: ['./registeredcandidate.component.scss']
})
export class RegisteredcandidateComponent implements OnInit {
  show_toogle:boolean = true
  name = 'Angular 6';
  htmlContent = '';
  edit_msg:any =[];
  rating3: number;
  rate;rfm;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  rating = 5;

  constructor(private app_Service: RegisteredcandidateService) {}
  view_single_notes:any;
  dummylisting:any = [];
  getnote: any = [];
  showdlisting;
  CandidateID;noteId;user_Id
  get_notes:boolean;
  notes:boolean = false ;
  model: any ={};
  data: any = {};

  ngOnInit(): void {
    this.rcandidate()
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  }
  
  view_toogle(event){
    console.log(event)
    this.show_toogle = true
    if (event.press == true) {
      this.show_toogle = true
    }
    else if (event.press == false){
      this.show_toogle = false
    }
  }

  rcandidate(){
    this.app_Service.dummylisting().subscribe(dlisting => {
      console.log(dlisting)
      this.dummylisting = dlisting.json();
      
    });
  }

  rnotes(CandidateID){
    this.getnote =[]
    this.app_Service.getnote(CandidateID).subscribe(note => {
      console.log(note)
      this.getnote = note.json();
      
    
    });
  }

  delete_cand(id){
    console.log(id)
    this.app_Service.Delete(id).subscribe(rfm =>{
      console.log('delete')
      console.log(id)
      // alert('deleted')
    
    })
  }

  id:any;
  view_notes_id(id){
    this.edit_msg =[]
    this.id = id
    console.log(id)
    for (let data of this.getnote.data){
      if( id == data.id){
        this.view_single_notes = data;
        console.log(data)
        this.edit_msg =[]
        this.edit_msg = data.msg_note
      }
    }
  }

  Edit_notes(){
    
    this.app_Service.edit(this.CandidateID,this.edit_msg,this.id).subscribe(note => {
      console.log(note)
    })
       
  }

  save_notes(){
    var newNewStr = this.htmlContent;
    newNewStr = newNewStr.replace(/\s/g, "");
    console.log(newNewStr);
 
    this.app_Service.Add_Cand(this.CandidateID,this.htmlContent.trim(),0).subscribe(note => {
      console.log(note)
       
    })
  }



  checked(event, CandidateID) {
        if (event.target.checked == true) {
            console.log(event.target.checked)
            this.get_notes = true;
            this.notes = true
            this.CandidateID = CandidateID
        }
        else if (event.target.checked == false) {
            console.log(event.target.checked)
            this.get_notes = false;
            this.notes = false
            this.CandidateID = null 
        }
    }

    get_notes_btn(){
      this.rnotes(this.CandidateID)
      if (this.get_notes == true){
        for(let abc of this.dummylisting){
          if ( this.CandidateID ==  abc.CandidateID){
            this.model = abc
            abc = this.model
            console.log(abc)
          }
           
         }
      }

    }


  get_val(data){
    console.log(data)
     for(let abc of this.dummylisting){
       if ( data ==  abc.CandidateID){
         this.model = abc
         abc = this.model
         console.log(abc)
       }
        
      }

  }



}
