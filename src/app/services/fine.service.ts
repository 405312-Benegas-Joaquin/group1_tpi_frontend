import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Page } from '../models/page.model';
import { Fine } from '../models/fine.model';

@Injectable({
  providedIn: 'root',
})
export class FineService {
  private apiUrl = 'http://localhost:8080';

  private http: HttpClient = inject(HttpClient);

  // Método para obtener los datos paginados
  getFines(page: number, size: number): Observable<Page<Fine> | null> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    console.log('Por hacer el request');

    return this.http
      .get<Page<Fine>>(`${this.apiUrl}/pageable/fine`, { params })
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          return of(null); // O maneja el error de otra manera
        })
      );
  }

  getFineById(id: number) {
    return this.http.get<Fine>(`${this.apiUrl}/fine/${id}`);
  }
}
