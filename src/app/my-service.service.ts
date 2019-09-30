import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class myService {
 
  color: boolean;
  
  constructor(){
 
  }
  likeImage(color: boolean): boolean {
      this.color = !color; 
      return this.color;
   }
    
}
