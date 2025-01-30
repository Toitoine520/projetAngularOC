import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { combineLatest, filter, interval, map, Observable, Subscription, tap, timer } from 'rxjs';
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

  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      filter((value) => value % 3 !== 0),
      map((value) =>
        value < 10
          ? `${value} est inférieur 10`
          : value === 10
          ? `${value} est égal à 10`
          : `${value} est supérieur à 10`
      ),
      tap((value) => this.logger(value))
    );

    this.timers$ = combineLatest(this.timer1$, this.timer2$, this.timer3$).subscribe(
      ([timer1, timer2, timer3]) => {
        console.log(
          `timer 1 : ${timer1}`,
          `timer 2 : ${timer2}`,
          `timer 3 : ${timer3}`,
        );
      }
    );
  }

  logger(texte: string) {
    console.log(`Log : ${texte}`);
  }
}
