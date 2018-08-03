import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

const url = 'https://baconipsum.com/api/?type=meat-and-filler';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getbaconIpsum() {
    return this.http.get<string>(url)
      .pipe(
        shareReplay(1)
      );
  }

}
