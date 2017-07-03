import { expect } from 'chai';
import React from 'react';
import jsdom from 'jsdom';
import { mount } from 'enzyme';
import sinon from 'sinon';

import CheckBox from './checkbox';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

describe('CheckBox', () => {
  describe('created with label', () => {
    let checkbox;
    before(() => {
      checkbox = mount(<CheckBox label="First checkbox" onChange={() => {}} />);
    });

    it('should successfully render', () => {
      expect(checkbox.find('button.bh-checkbox').length).to.equal(1);
    });
    it('should present the label text correct', () => {
      expect(checkbox.find('.bh-checkbox__label').text()).to.equal('First checkbox');
    });
  });
  describe('created with checked prop will start up in checked status', () => {
    let checkbox;
    before(() => {
      checkbox = mount(<CheckBox label="First checkbox" onChange={() => {}} checked />);
    });

    it('should successfully render', () => {
      expect(checkbox.find('button.bh-checkbox--checked').length).to.equal(1);
    });
  });
  describe('created without label', () => {
    let checkbox;
    before(() => {
      checkbox = mount(<CheckBox onChange={() => {}} />);
    });

    it('should successfully render', () => {
      expect(checkbox.find('button.bh-checkbox').length).to.equal(1);
    });
    it('should not presetn a label', () => {
      expect(checkbox.find('.bh-checkbox__label').length).to.equal(0);
    });
  });
  describe('when clicked', () => {
    let checkbox;
    const onChangeSpy = sinon.spy();

    before(() => {
      checkbox = mount(<CheckBox label="First checkbox" value="some value" onChange={onChangeSpy} />);
      checkbox.simulate('click');
    });

    it('should successfully render its checked status', () => {
      expect(checkbox.find('button.bh-checkbox--checked').length).to.equal(1);
    });
    it('should call onChange function with the expected values', () => {
      const expectedArgs = {
        checked: true,
        label: 'First checkbox',
        value: 'some value',
      };
      expect(onChangeSpy.args[0][0]).to.deep.equal(expectedArgs);
    });
    describe('when clicked again', () => {
      before(() => {
        checkbox.simulate('click');
      });
      it('should call onChange function with the expected values', () => {
        const expectedArgs = {
          checked: false,
          label: 'First checkbox',
          value: 'some value',
        };
        expect(onChangeSpy.args[1][0]).to.deep.equal(expectedArgs);
      });
      it('should successfully render its unchecked status', () => {
        expect(checkbox.find('button.bh-checkbox--checked').length).to.equal(0);
      });
    });
  });
  describe('when created without label or value', () => {
    let checkbox;
    const onChangeSpy = sinon.spy();

    before(() => {
      checkbox = mount(<CheckBox onChange={onChangeSpy} />);
      checkbox.simulate('click');
    });
    it('should call onChange function with the expected undefined values', () => {
      const expectedArgs = {
        checked: true,
        label: undefined,
        value: undefined,
      };
      expect(onChangeSpy.args[0][0]).to.deep.equal(expectedArgs);
    });
  });
});
