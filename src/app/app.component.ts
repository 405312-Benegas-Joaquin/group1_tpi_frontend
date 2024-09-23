import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
}
