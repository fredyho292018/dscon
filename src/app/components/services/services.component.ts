import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServeconsergueService, ClasificacionI, ServeI } from 'src/app/services/serveconsergue.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  listaServes: ServeI[] = [];
  clasificacion: string = null;
  constructor(private _activatedRoute: ActivatedRoute, private _serveconsergueService: ServeconsergueService, private ro: Router ) {
 }
 verServicio( i: number) {
   this.ro.navigate(['/servicio', i]);
 }
 ngOnInit() {
   this._activatedRoute.params.subscribe(parans => {
     console.log(parans['clasificacion']);
     this.clasificacion = parans['clasificacion'];
     if (this.clasificacion == 'Services' || this.clasificacion == 'Packs' || this.clasificacion == 'Team') {
         this.listaServes = this._serveconsergueService.getDsListaClasificacion(parans['clasificacion']);
     } else {
      // --Page not found
      this.ro.navigate([this.clasificacion]);
     }
   });
  }

}
