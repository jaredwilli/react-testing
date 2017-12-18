import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';


describe('CommentList', () => {
    /**
     * - it shows a comment
     * - given a list of comments, it shows all comments
     */
    let component;

    beforeEach(() => {
        const props = { comments: ['Test Comment', 'Better Comment'] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows all comments given a list of comments', () => {
        expect(component).to.contain('Test Comment');
        expect(component).to.contain('Better Comment');
    });

});
