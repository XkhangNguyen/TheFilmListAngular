import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HideComponentService {
  private hideComponentSource = new BehaviorSubject<boolean>(false);
  hideComponent$ = this.hideComponentSource.asObservable();

  hideComponent(hide: boolean) {
    this.hideComponentSource.next(hide);
  }
}
