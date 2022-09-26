import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/pais.nterfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string='https://restcountries.com/v2';
  
  get httpParams(){
    return new HttpParams().set( 'field','name').
    set( 'field','capital').set( 'field','alpha2Code').set( 'field','flag').set( 'field','population');
  }
 
  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<Country[]>{  //aca se pone el cpuntry pero es una rreglo sique lo pongo con []
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});  //en este caso no llamamos al subscribe porque queremos que retorne todo a donde estan llamando el servicio
        /* .pipe(
          catchError(err=> of([]))  //of transforma lo que sea en un observable, osea atrapa el error y retorna un arreglo vacio
        ); */
  }


  buscarCapital(capital:string):Observable<Country[]>{
    const url=`${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url,{params:this.httpParams});

  }

  getPaisPorCodigo(id:string):Observable<Country>{
    const url=`${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);

  }

  buscarRegion(region:string):Observable<Country[]>{
    
    const url=`${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }


}
