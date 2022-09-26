import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.nterfaces';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {


  hayError:boolean = false;
  capital:string = "";
  paises: Country[]=[];
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(capital:string){
    this.paisService.buscarCapital(capital);
    this.capital = capital
    console.log(capital);
    console.log(this.capital);  //aca si se aplica el subscribe para poder mostrarlo por pantalla
    this.paisService.buscarCapital(this.capital).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    },(err)=>{
      console.log('Error');
      this.hayError=true;
      this.paises=[];
    });

  }

  sugerencias(valor:string){
    this.hayError = false;
  }
}
