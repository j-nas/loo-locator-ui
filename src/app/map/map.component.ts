import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Map } from 'maplibre-gl';
import { GeoapifyService } from '../geoapify.service';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  private map!: Map;

  constructor(private geoapifyService: GeoapifyService) { }
  apikey?: string;

  ngOnInit() {
    this.geoapifyService.getApiKey().subscribe((response) => {
      this.apikey = response.apikey;
    });
  }
  ngAfterViewInit() {
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 5
    }
    const apiKey = this.geoapifyService.getApiKey().subscribe((response) => {
      this.apikey = response.apikey;
    });
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${this.apikey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

  }

}
