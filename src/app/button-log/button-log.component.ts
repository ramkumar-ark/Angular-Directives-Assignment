import { Component } from '@angular/core';

@Component({
  selector: 'app-button-log',
  templateUrl: './button-log.component.html',
  styleUrls: ['./button-log.component.css'],
})
export class ButtonLogComponent {
  displayStatus: boolean = false;
  logArray: string[] = [];
  onDisplay(): void {
    this.displayStatus = !this.displayStatus;
    this.logArray.push(`Button Clicked at ${Date.now()}`);
  }
  getBgColor(log: string): string {
    const elementIndex: number = this.logArray.indexOf(log);
    return elementIndex >= 4 ? 'blue' : 'transparent';
  }

  isTextColor(log: string): boolean {
    return this.logArray.indexOf(log) >= 4;
  }
}
