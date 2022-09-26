import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent implements OnInit {

  @Input() placeholder:string="";
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //caja de sugerencias
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject(); //es un observabl, la idea es que se emita cuando deje de escrbiri
  termino: string = "";
  constructor() { }

  ngOnInit(): void {
    //aca me suscribo al debouncer,debouncetime indica no hagas el debopunce hasta que no se ejecute nada durante 300ms
    this.debouncer.pipe(debounceTime(300)).subscribe( valor =>{
      this.onDebounce.emit(valor);
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(/* event: any */){
   /* const valor= event.target.value;
   console.log(valor);
   console.log(this.termino); */
   this.debouncer.next(this.termino); //next para mandar siguiente valor entre ()

  }
}
