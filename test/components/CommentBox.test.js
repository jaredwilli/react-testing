import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('CommentBox', () => {
    /**
     * - has a textarea
     * - has a submit button
     * - entering text updates the textarea
     * - handles simulation of entering text
     * - handles submitting form and clears textarea
     */
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a textarea', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a submit button', () => {
        expect(component.find('button')).to.exist;
        expect(component.find('button')).to.have.attr('type', 'submit');
        expect(component.find('button')).to.contain('Submit Comment');
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows the text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment')
        });

        it('clears the textarea when clicking submit', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});
