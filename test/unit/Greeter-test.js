import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Greeter from '../../app/lib/Greeter/Greeter';

const props = {

};

describe("A suite", () => {
    // it("contains spec with an expectation", function() {
    //     expect(shallow(<DropDown />).contains(<div className="foo" />)).to.equal(true);
    // });
    //
    // it("contains spec with an expectation", function() {
    //     expect(shallow(<DropDown />).is('.kjkmEdit')).to.equal(true);
    // });


    it("测试 Visual Dom name", () => {
        const wrapper = shallow(<Greeter {...props} />);
        expect(wrapper.name()).to.equal('div');
    });

    it("测试 Visual Dom len", () => {
        const wrapper = shallow(<Greeter {...props} />);
        expect(wrapper.find('.root').length).to.equal(1);
    });
});
