import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sneaker } from '../models/sneaker';

@Injectable({
  providedIn: 'root',
})
export class SneakerService {
  private url = environment.baseUrl + 'api/sneakers';

  constructor(private http: HttpClient) {}

  index(): Observable<Sneaker[]> {
    return this.http.get<Sneaker[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'SneakerService.index(): error retrieving sneakers: ' + err
            )
        );
      })
    );
  }

  create(sneaker: Sneaker): Observable<Sneaker> {
    console.log(sneaker)
    return this.http.post<Sneaker>(this.url, sneaker).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error('SneakerService.create(): error creating sneaker: ' + err));
      })
    );
  }

  update(id: number, sneaker: Sneaker): Observable<Sneaker> {
    return this.http.put<Sneaker>(this.url + '/' + id, sneaker).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error('SneakerService.update(): error updating sneaker: ' + err));
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error('SneakerService.destroy(): error deleting sneaker: ' + err));
      })
    );
  }

  show(id: number): Observable<Sneaker> {
    return this.http.get<Sneaker>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error('SneakerService.show(): error getting sneaker: ' + err));
      })
    );
  }
}

