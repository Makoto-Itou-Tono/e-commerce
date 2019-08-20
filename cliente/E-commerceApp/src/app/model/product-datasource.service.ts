import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = '';

@Injectable({
  providedIn: 'root'
})
export class ProductDatasourceService {

  private baseUrl: string;


  constructor(private httpClient: HttpClient) { 
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/ecomerce/api`;
  };

  getProducts(): any {
    return this.httpClient.get(this.baseUrl + '/products');
  }
}