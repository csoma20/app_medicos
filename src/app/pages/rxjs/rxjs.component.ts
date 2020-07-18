import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

import {retry,take,map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit,OnDestroy {

  public internalSubs: Subscription;

  constructor() { 


   /*
   this.retornaObservable().pipe(

      retry(1)
    ).subscribe(

      valor=> console.log('Subs', valor),
      error => console.warn('Error', error),
      () => console.info('obs terminado')
    );
*/


this.internalSubs=this.retornaIntervalo()
    .subscribe(

      (valor) => console.log(valor)
    )      

  }

  ngOnDestroy(){

    this.internalSubs.unsubscribe();
  }

  retornaIntervalo(){

    const intervalo$= interval(100)
                        .pipe(
                          map(valor => valor +1),
                          filter(valor => (valor % 2 ===0 ) ? true: false )

                          

                          
                          )
                        

    return intervalo$;

  }

  retornaObservable(): Observable<number>  {

    let i=-1;  

    const obs$= new Observable<number>( observer => {


      
     const intervalo= setInterval( () => {
      
        i++;

        observer.next(i);

        if ( i===4 ){

          clearInterval(intervalo);
          observer.complete();

        }

        if ( i===2 ){

     i=0
          observer.error('i llego al valor 2');

        }

      },1000) 


      

    });

    return obs$;

  }

  ngOnInit(): void {
  }

}
