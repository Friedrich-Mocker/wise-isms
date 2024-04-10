import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { SharedDataType } from '@wise-isms/shared';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: ` {{ backendData | json }} `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  backendData?: SharedDataType;
  httpClient = inject(HttpClient);
  constructor() {
    this.httpClient.get<SharedDataType>('/api').subscribe({
      next: (data) => {
        this.backendData = data;
      },
    });
  }
}
