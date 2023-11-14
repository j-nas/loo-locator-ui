import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoapifyService {

  constructor(private http: HttpClient) { }

  getApiKey() {
    const url = 'http://localhost:3000/apikey';
    const response = this.http.get<ApiKeyResponse>(url);
    return response;
  }
}

type ApiKeyResponse = {
  key: string;
};

