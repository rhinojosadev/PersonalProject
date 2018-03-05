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
  initialVm = new PostReviewViewModel();
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
        this.setPostPostReviewViewModel(currentModel);
        this.onEditReviewMovieModal.emit(this.initialVm);
    } else {
      this.onSubmitReviewMovieModal.emit(currentModel);
    }
    this.activeModal.close();
  }

  setPostPostReviewViewModel(currentModel: PostReview) {
    this.initialVm.id = currentModel.id;
    this.initialVm.description = currentModel.description;
    this.initialVm.isrecommended = currentModel.isrecommended;
    this.initialVm.rate = currentModel.rate;
    this.initialVm.title = currentModel.title;
    this.initialVm.uniqueId = this.initUniqueId;
    this.initialVm.username = currentModel.username;
  }


}
