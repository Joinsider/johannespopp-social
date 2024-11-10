import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrls: [`./popup.component.css`],
})
export class PopupComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Success!';
  @Input() message: string = 'Your message has been sent successfully.';
  @Output() close = new EventEmitter<void>();

  countdown: number = 10;
  private timer: any;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private startCountdown() {
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        this.closePopup();
      }
    }, 1000);
  }

  closePopup() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.close.emit();
  }
}
