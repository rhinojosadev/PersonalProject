import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteComponent } from './modal-delete.component';

describe('ModalDeleteComponent', () => {
    let component: ModalDeleteComponent;

    beforeEach( () => {
        component = new ModalDeleteComponent(null);
    });

    it('#DeleteModal should emit an answer', () => {
        let value = null;
        component.answerModal.subscribe(answer => value = answer );

        component.answer(true);

        expect(value).not.toBeNull();
    });
});
