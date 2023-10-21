import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sneaker } from '../models/sneaker';
import { Condition } from '../models/condition';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {
  private url = environment.baseUrl + 'api/sneakers/conditions';
  constructor(private http: HttpClient) { }

  index(): Observable<Condition[]> {
    return this.http.get<Condition[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'ConditionService.index(): error retrieving conditions: ' + err
            )
        );
      })
    );
  }
}
