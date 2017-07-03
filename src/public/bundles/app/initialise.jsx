import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from './components/checkbox';

const onCheckboxChanged = (e) => {
  console.log('check toggle', e); // eslint-disable-line no-console
};

export default function init() {
  ReactDOM.render(
    (
      <CheckBox label="First checkbox" value="some value" onChange={onCheckboxChanged} />
    ),
    document.getElementById('main'));
}
