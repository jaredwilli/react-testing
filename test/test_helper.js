import jquery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Setup testing environment like a browser in command line
global.navigator = { userAgent: 'node.js' };
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// Build 'renderComponent' helper that should render a React class
function renderComponent(ComponentClass, props, state) {
    const componentWrapper = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentWrapper));
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }

    TestUtils.Simulate[eventName](this[0]);
};

// Setup chai-jquery
chaiJquery(chai, chai.util, $);

// Exports
export {
    renderComponent,
    expect
};
