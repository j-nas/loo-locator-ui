import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MapApiService } from './mapApi.service';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MapComponent, NgxMapLibreGLModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private mapApiService: MapApiService) { }

  styleUrl?: string;

  ngOnInit() {
    this.mapApiService.getApiKey().subscribe((response) => {
      this.styleUrl = `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${response.key}`
    });
  }
}
