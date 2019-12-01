import { NotifierService } from 'angular-notifier';
import { Component, OnInit } from '@angular/core';
import { IndexService } from '@services/index.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrls: ['./secret-page.component.scss']
})
export class SecretPageComponent implements OnInit {

  private readonly notifier: NotifierService
  public data: string

  constructor(private _Data : IndexService, notifierService: NotifierService, private _router: Router) {
    this.notifier = notifierService
  }

  ngOnInit() {
    this._Data.getData()
        .subscribe(
          res => this.data = res.text,
          err => {
            if (err.status === 401){
              this.notifier.show({
                type: 'info',
                message: err.error.msg
              })
            }else{
              this.notifier.show({
                type: 'error',
                message: err.statusText
              })
            }
            this._router.navigate(['/signin'])
          }
          
        )
  }

}
