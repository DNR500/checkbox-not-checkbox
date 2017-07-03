import React from 'react';
import classnames from 'classnames';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
    };

    this.onToggleCheck = this.onToggleCheck.bind(this);
  }

  onToggleCheck() {
    const { label, value, onChange } = this.props;
    const { checked } = this.state;

    const checkedStatus = !checked;

    this.setState({
      checked: checkedStatus,
    });

    onChange({
      label,
      value,
      checked: checkedStatus,
    });
  }

  render() {
    const { label } = this.props;
    const { checked } = this.state;

    const checkboxClass = classnames('bh-checkbox', { 'bh-checkbox--checked': checked });

    return (
      <button className={checkboxClass} onClick={this.onToggleCheck}>
        {
          label &&
          <span className="bh-checkbox__label">{label}</span>
        }
      </button>
    );
  }
}

CheckBox.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  checked: React.PropTypes.bool,
};

export default CheckBox;
