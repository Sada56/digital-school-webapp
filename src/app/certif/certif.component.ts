import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certif',
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.css']
})
export class CertifComponent implements OnInit {
  certifEvents?:any

  constructor(private _eventService:EventService,
    private _router:Router) { }

  ngOnInit(): void {
    this._eventService.getCertifEvents()
    .subscribe(
    res =>this.certifEvents=res ,
    err =>{
      if( err instanceof HttpErrorResponse){
        if(err.status ===401){
          this._router.navigate(['/login'])

        }
      }
    }
    )
  }

}
