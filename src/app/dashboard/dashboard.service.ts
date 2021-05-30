import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly url = 'https://rcm-santander-dio-bootcamp.herokuapp.com/backend';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.url}/stock`).toPromise();
  }
}
