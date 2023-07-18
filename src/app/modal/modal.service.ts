import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ModalService {
  private showModalSubject: Subject<number> = new Subject<number>();

  showModal$ = this.showModalSubject.asObservable();

  openModal(id:number) {
    this.showModalSubject.next(id);
  }

  closeModal() {
    this.showModalSubject.next(0);
  }
}
