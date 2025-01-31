import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { combineLatest, delay, filter, interval, map, mergeMap, Observable, of, Subscription, take, tap, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { OperatorSubscriber } from 'rxjs/internal/operators/OperatorSubscriber';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  interval$!: Observable<string>;

  timer1$: Observable<number> = timer(1000, 4000);
  timer2$: Observable<number> = timer(2000, 4000);
  timer3$: Observable<number> = timer(3000, 4000);

  timers$!: Subscription;


  redTrainsCalled = 0;
  blueTrainsCalled = 0;

  ngOnInit(): void {
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'bleu'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      mergeMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Le train %c${train.color} ${train.trainIndex} entre en gare !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'bleu') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.blueTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.blueTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'bleu') {
    return color === 'rouge' ? 'red' : 'blue';
  }

}
