import { Component, OnInit } from '@angular/core';
import { ServeconsergueService, ServeI } from 'src/app/services/serveconsergue.service';
import { ActivatedRoute, Router } from '@angular/router';
// import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaService: ServeI[] = [];
  listaPacks: ServeI[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(private _activatedRoute: ActivatedRoute, private _serveconsergueService: ServeconsergueService, private ro: Router) {
    this.listaService = this._serveconsergueService.getDsListaClasificacion('Services');
    console.log(this.listaService);
    this.listaPacks = this._serveconsergueService.getDsListaClasificacion('Packs');
  }

  ngOnInit() {


  }
  verServicio( i: number) {
    this.ro.navigate(['/services', i]);
  }
}
