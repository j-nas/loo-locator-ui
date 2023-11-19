import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapApiService } from '../mapApi.service';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, NgxMapLibreGLModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  initialPosition: [number, number] = [123, 49];

  constructor(private geoapifyService: MapApiService) { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.initialPosition = [position.coords.longitude, position.coords.latitude];
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  @Input()
  styleUrl?: string;




}


