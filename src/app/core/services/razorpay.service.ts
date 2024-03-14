// razorpay.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

const headers = new HttpHeaders()
    .set('Authorization', 'R1QQC17HYgstnl2GxRffgu9a');

@Injectable({
    providedIn: 'root',
})
export class RazorpayService {
    constructor(private http: HttpClient) { }
    getPaymentDetailsById(paymentId: any){
        return this.http.get(ApiService.fetchPaymentURL + paymentId);
    }
}
