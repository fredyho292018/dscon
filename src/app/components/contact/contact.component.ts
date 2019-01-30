import { Component, OnInit } from '@angular/core';
import { ServeconsergueService, ServeI, ContactoI } from 'src/app/services/serveconsergue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: ContactoI = null;
  paginas: string[] = [];
  otherservices: string[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(private _activatedRoute: ActivatedRoute, private _serveconsergueService: ServeconsergueService, private ro: Router, public translate: TranslateService) {
    this.contact = this._serveconsergueService.getContacto();
    this.paginas = this._serveconsergueService.getPaginas();
    this.otherservices = this._serveconsergueService.getOtherServices();
  }

  ngOnInit() {


  }
}
