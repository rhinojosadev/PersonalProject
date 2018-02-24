import { PostReviewViewModel } from './../post-review/pos-review-vm';
import { PostReview } from './../post-review/post-review';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import _ = require('lodash');

@Component({
  selector: 'app-modal-review',
  templateUrl: './modal-review.component.pug',
  styleUrls: ['../../sass/module/modal-review.component.scss']
})
export class ModalReviewComponent implements OnInit {

  @Input() type: string;
  @Output() onSubmitReviewMovieModal: EventEmitter<PostReview> = new EventEmitter<PostReview>();
  @Output() onEditReviewMovieModal: EventEmitter<PostReviewViewModel> = new EventEmitter<PostReviewViewModel>();
  titleModal: string;
  initialModel = new PostReview();
  initUniqueId: string;
  isEdit: boolean;
  activeModal: NgbModalRef;


  @ViewChild('content') modalContent: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {

  }

  openModal(model?: PostReview, uniqueId?: string) {
    this.type = 'movie';
    this.initialModel = model;
    this.initUniqueId = uniqueId;
    this.isEdit = !(_.isEmpty(this.initUniqueId));
    this.setTitleModal(model);
    this.activeModal = this.modalService.open(this.modalContent, {size: 'lg'});
  }

  setTitleModal(model) {
    if (_.isEmpty(model)) {
      this.titleModal = 'Add';
    } else {
      this.titleModal = 'Edit';
    }
  }

  onSubmitReviewMovieEvent(currentModel: PostReview ) {
    if (this.isEdit) {
         const newVm = new PostReviewViewModel();
         newVm.id = currentModel.id;
         newVm.description = currentModel.description;
         newVm.isrecommended = currentModel.isrecommended;
         newVm.rate = currentModel.rate;
         newVm.title = currentModel.title;
         newVm.uniqueId = this.initUniqueId;
         newVm.username = currentModel.username;
      this.onEditReviewMovieModal.emit(newVm);
    } else {
      this.onSubmitReviewMovieModal.emit(currentModel);
    }
    this.activeModal.close();
  }

}
