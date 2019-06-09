import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
   selector:'ui-form',
   templateUrl:'./form.component.html',
   styleUrls:['./form.component.css']
})

export class UIFormComponent{

   name = new FormControl('');

   constructor(){
     
   }
}