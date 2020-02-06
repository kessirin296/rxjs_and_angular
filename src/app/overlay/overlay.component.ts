import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  public isHide = true;

  constructor(
    public overlayService: OverlayService
  ) { }

  ngOnInit() {
    this.overlayService.toggle$
      .subscribe({
        next: (show) => {
          this.isHide = !show;
        }
      });
  }

}
