import { PostReviewViewModel } from './../post-review/pos-review-vm';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PostReview } from './../post-review/post-review';
import { ModalReviewComponent } from './modal-review.component';

describe('ModalReviewComponent', () => {
    let component: ModalReviewComponent;
    let modalService: NgbModal;

    beforeEach( () => {
        modalService = new NgbModal(null, null, null);
        component = new ModalReviewComponent(modalService);
    });

    it('#ModalReview the modal should be called to open ', () => {
       const modalOpen = spyOn(modalService, 'open').and.callFake( () => {
          return true;
        });

        component.openModal(null, null);

        expect(modalOpen).toHaveBeenCalled();
    });

    it('#ModalReview the title of the modal should be edit when recives the model', () => {

        component.setTitleModal(['Something']);

        expect(component.titleModal).toBe('Edit');
    });

    it('#ModalReview the title of the modal should be add when is empty', () => {

        component.setTitleModal([]);

        expect(component.titleModal).toBe('Add');
    });

    it('#ModalReview the modal should have a post view model if its an edit', () => {

        const mockPostReview = new PostReview();
        mockPostReview.description = 'description';
        mockPostReview.id = '999';
        mockPostReview.isrecommended = false;
        mockPostReview.rate = 3;
        mockPostReview.title = 'title';
        mockPostReview.username = 'username';

        component.isEdit = true;
        component.setPostPostReviewViewModel(mockPostReview);

        expect(component.initialVm.description).toBe(mockPostReview.description);
        expect(component.initialVm.id).toBe(mockPostReview.id);
        expect(component.initialVm.isrecommended).toBe(mockPostReview.isrecommended);
        expect(component.initialVm.rate).toBe(mockPostReview.rate);
        expect(component.initialVm.title).toBe(mockPostReview.title);
        expect(component.initialVm.username).toBe(mockPostReview.username);
    });
});
