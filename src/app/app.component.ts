import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-stackoverflow';

  number;
  numberObs;

  click() {

    this.getRandomNumberPromise()
      .then(randomNumber => {
        this.number = randomNumber;
      });

    this.getRandomNumberObservable()
      .subscribe(randomNumber => {
        this.numberObs = randomNumber;
      });

  }

  getRandomNumberPromise() {

    return new Promise(resolve => {
      resolve(Math.floor(Math.random() * 10));
    });

  }

  getRandomNumberObservable() {

    return new Observable(observer => {
      observer.next(Math.floor(Math.random() * 10));
    });

  }

}
