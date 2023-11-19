import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapApiService {

  constructor(private http: HttpClient) { }

  getApiKey() {
    const url = 'http://localhost:3000/apikey';
    const response = this.http.get<ApiKeyResponse>(url);
    return response;
  }
  getStyleUrl() {
    const baseUrl = 'https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=';
    const apiKey = this.getApiKey().subscribe((response) => {
      return response.key;
    });
    return baseUrl + apiKey;

  }
}

type ApiKeyResponse = {
  key: string;
};

