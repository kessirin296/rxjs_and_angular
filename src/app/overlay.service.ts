import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public toggle$ = new Subject<boolean>();

  public show() {
    this.toggle$.next(true);
  }

  public hide() {
    this.toggle$.next(false);
  }
}
