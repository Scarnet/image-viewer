import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ImageEventResponse } from '../models/image-event.model';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss'],
  standalone: true,
  imports: [DatePipe, MatCardModule, NgIf]
})
export class ImageDisplayComponent implements OnInit {
  latestImage: ImageEventResponse = { latestEvent: null };
  private fetchEventsUrl = `${environment.apiUrl}/events`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLatestImage();
    setInterval(() => this.fetchLatestImage(), 5000);
  }

  fetchLatestImage(): void {
    this.http.get<ImageEventResponse>(this.fetchEventsUrl)
    .pipe(
      tap(response => this.latestImage = response ?? { latestEvent: null }),
      catchError(error =>  {
          console.error('Error fetching latest image:', error);
          return of({ LatestEvent: null });})
    ).subscribe()
  }
}
