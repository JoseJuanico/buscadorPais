import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.nterfaces';
//este switchnmap permite recibir un observable y re tornar un observable
import { switchMap,tap } from 'rxjs';

//tap es un operador que dispara efecto secundario

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!:Country;


  constructor(private activatedRoute: ActivatedRoute,private paisService:PaisService) { } //activateRopute viene con todo lo necesariop para ionsciribirnos a todo cambuioi de una url

  ngOnInit(): void {
    /* this.activatedRoute.params.subscribe(({id}) =>{
      console.log(id);
      this.paisService.getPaisPorCodigo(id).subscribe(pais=>{
        console.log(pais);''
      })
    }) */

    this.activatedRoute.params.pipe(switchMap((param)=>this.paisService.getPaisPorCodigo(param['id'])),tap(console.log)).subscribe(pais=>{
      this.pais=pais;
    });
  }

}
