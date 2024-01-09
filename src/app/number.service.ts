import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  
  constructor() {}

  public iCnt: number = 0;
  public result: number = 0;

  ChkPrime()
  { 
    for(this.iCnt = 2; this.iCnt<12; this.iCnt++)
    {
      if ((12 % this.iCnt)==0) 
      {
         "It is a prime number"; 
      }
      else
      {
        "It is not a prime number"; 
      }
    }
  }
}
  
