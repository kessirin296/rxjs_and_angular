import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public toggle$ = new Subject<boolean>();

  constructor() { }

  public show() {
    this.toggle$.next(true);
  }

  public hide() {
    this.toggle$.next(false);
  }
}
