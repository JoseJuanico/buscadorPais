import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';


//ester archivo es para configurar las rutas de la app, se importa y coloca el 
//decorador ngModule

//aca se define cada una de las rutas
const routes: Routes = [
    {
        path:'',  //este simula el url principal de la app, el que se abrira primero
        component: PorPaisComponent,  //aca se selecciona que componente se va a mostrar
        pathMatch: 'full'  //cuando estemos en el url '' caiga en este lugar si o si
    },
    {
        path:'region',  //ademas este path es lo que se mostrara en la url www.google.cl/region
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path:'pais/:id',  //aca le decimos explicitamente que la ruta para mostrar pais debe tener un argumento al lado, por ej 'pais/cri' asi en duro mostrara siempre pais/y el argumento cri
        component: VerPaisComponent
    },
    {  //aca se configura la exception error, el path ** es, sino se conecta a niuna otro path redirijime a... algunas personas cren un componente de error
        path: '**',
        redirectTo: ''
    }

]
@NgModule({
    imports:[    //routermodule hace la configuracion de mis rutas,forRoot rutas principales, for child rutas hijas
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule  //se debe exportar al final
    ]

})
export class AppRoutingModule {}