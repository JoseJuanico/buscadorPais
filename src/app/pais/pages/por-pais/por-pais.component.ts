import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.nterfaces';



@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[`
  li{
    cursor:pointer;
  }
  `

  ]
})
export class PorPaisComponent implements OnInit {
  termino: string = 'Hola mundo';
  hayError: boolean=false;
  paises: Country[]=[];
  paisesSugeridos:Country[]=[];
  mostrarSugerencias:boolean=false;
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    this.hayError=false;
    this.termino = termino;
    console.log(this.termino);  //aca si se aplica el subscribe para poder mostrarlo por pantalla
    this.paisService.buscarPais(this.termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    },(err)=>{
      console.log('Error');
      this.hayError=true;
      this.paises=[];
    });

    /* EL SUBSCRIBE RETORNA DOS VALORES, EL NEXT(RESP) Y EL ERROR */
  }
  sugerencias(termino:string){
    this.hayError = false;
    this.termino=termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(paises=>{
      this.paisesSugeridos = paises.splice(0,5)
      
    },(err)=>{
      this.paisesSugeridos=[];
    });
    

  }

  buscarSugerido(termino:string){
    this.buscar(termino);
   

  }
}
