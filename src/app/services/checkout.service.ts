import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Puarchase } from '../common/puarchase';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  
  private purchaseUrl = 'http://localhost:8080/api/checkout/purchase';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase:Puarchase): Observable<any>{
    return this.httpClient.post<Puarchase>(this.purchaseUrl,purchase);
  }
}
