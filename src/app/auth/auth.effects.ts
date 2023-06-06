import { Actions } from "@ngrx/effects"
import { Injectable } from "@angular/core";

@Injectable()
export class AuthEffects {

  constructor (private actions$: Actions) {
    actions$.subscribe(action => {
      if (action.type == '[Login Page] User Login') {
        localStorage.setItem('user', JSON.stringify(action["user"]));  
      }
    });

  }

}
