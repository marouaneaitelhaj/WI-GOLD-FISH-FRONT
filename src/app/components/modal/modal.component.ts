import { Component } from '@angular/core';
import ModalProps from './modalProps';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  modalProps : ModalProps = new ModalProps();
}
