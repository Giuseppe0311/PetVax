import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogCommunicationServiceService {

  private showDialogSource = new Subject<string>();
  showDialog$ = this.showDialogSource.asObservable();

  showDialog(modalName: string) {
    this.showDialogSource.next(modalName);
  }
}
