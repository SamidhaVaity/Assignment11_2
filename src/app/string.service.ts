import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  constructor() { }
  public Str: string = "MarveLLoUs";
  public iCnt: number = 0;
  public count: number = 0;
  public ch : any 

  CountCapital()
  { 
    for(this.iCnt = 0; this.iCnt<this.Str.length; this.iCnt++)
    {
      this.ch = this.Str.charAt(this.iCnt);
	    if(this.ch >= 'A' && this.ch <= 'Z') ++this.count;
    }
    return this.count;
  }
}
