import { ModalDeleteComponent } from './../modal-delete/modal-delete.component';
import { ModalReviewComponent } from './../modal-review/modal-review.component';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PostReview } from '../post-review/post-review';
import { FirebaseService } from '../services/firebase.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.pug',
  styleUrls: ['../../sass/module/post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  @Input() post: PostReview;
  @Input() uniqueId: string;
  @Input() modal: ModalReviewComponent;
  @Input() type: string;

  activeModal: NgbModalRef;


  @ViewChild(ModalDeleteComponent) modalDelete: ModalDeleteComponent;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onClickDelete() {
   this.activeModal = this.modalDelete.modalService.open(this.modalDelete.modalContent, {size: 'lg', windowClass: 'delete-modal'});
  }

  onClickDeleteAnswer(value: boolean) {
    if (value) {
        switch (this.type) {
          case 'book':
            this.firebaseService.deleteBookCommentById(this.uniqueId);
            this.activeModal.close();
          break;
          case 'movie':
            this.firebaseService.deleteMovieCommentById(this.uniqueId);
            this.activeModal.close();
          break;
        }
      } else {
        this.activeModal.close();
      }
    }

  onClickEdit(post: PostReview) {
    this.modal.openModal(post, this.uniqueId);
  }

}
