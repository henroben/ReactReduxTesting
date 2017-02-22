import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

    let component ;

    beforeEach(() => {

        component = renderComponent(CommentBox);

    });

    it('exists', () => {

        expect(component).to.exist;

    });

    it('has the correct class', () => {

        expect(component).to.have.class('comment-box');

    });

    it('has a text area', () => {

        expect(component.find('textarea')).to.exist;

    });

    it('has a submit button', () => {

        expect(component.find('button')).to.exist;

    });

});