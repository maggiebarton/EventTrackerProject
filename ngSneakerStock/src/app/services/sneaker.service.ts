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
}
