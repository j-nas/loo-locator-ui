import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { GeoapifyService } from './geoapify.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private geoapifyService: GeoapifyService) { }

  apiKeyResolved?: string;

ngOnInit() {
    this.geoapifyService.getApiKey().subscribe((response) => {
      this.apiKeyResolved = response.key;
    });
  }
}
