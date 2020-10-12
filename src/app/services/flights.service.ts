import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flightDataBase: Flight[] = [
    {
      code: "CVB55",
      from: "TLV",
      to: "JFK",
      price: 345
    },
    {
      code: "ASF127",
      from: "JFK",
      to: "LAX",
      price: 567
    },
    {
      code: "CVB55",
      from: "JFK",
      to: "TLV",
      price: 678
    },
    {
      code: "CVB55",
      from: "TLV",
      to: "JFK",
      price: 345
    },
    {
      code: "CVB390",
      from: "TLV",
      to: "AMS",
      price: 45
    },
  ]

  constructor() { }
}

interface Flight {
  code: string,
  from: string,
  to: string,
  price: number
}
