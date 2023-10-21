import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Brand } from '../models/brand';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
private url = environment.baseUrl + 'api/sneakers/brands';

  constructor(private http: HttpClient) { }

  index(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'BrandService.index(): error retrieving brands: ' + err
            )
        );
      })
    );
  }
}
