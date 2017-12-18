import React from 'react';
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('has className App', () => {
        expect(component).to.have.class('App');
    });

    it('shows a CommentBox', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('shows a CommentList', () => {
        expect(component.find('.comment-list')).to.exist;
    });


});

