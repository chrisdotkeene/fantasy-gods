import { AppService } from './../app.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  baconIpsum: Observable<string>;

  constructor(appService: AppService) {
    console.log('here');
    this.baconIpsum = appService.getbaconIpsum()
    .pipe(
      tap(log => console.log('dashboard component', log))
    );

    console.log('here', this.baconIpsum);
   }

}
