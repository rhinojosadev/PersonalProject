import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.pug',
  styleUrls: ['../../sass/module/modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  @ViewChild('content') modalContent: ElementRef;
  @Output() answerModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  answer(value: boolean) {
   this.answerModal.emit(value);
  }

}
