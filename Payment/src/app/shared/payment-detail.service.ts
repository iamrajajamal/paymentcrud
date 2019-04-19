import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:5000/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail) {
    return this.http.post(this.rootURL + '/PaymentDetails', formData);
  }

  refreshList() {
    return this.http.get(this.rootURL + '/PaymentDetails').toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
