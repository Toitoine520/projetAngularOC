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

  ngOnInit(): void { }
}
