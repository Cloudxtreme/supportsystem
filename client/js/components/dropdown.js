import React, {Component} from 'react';

import {Icon, ButtonIcon} from "./icons";

export class DropdownItem extends Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
      event.preventDefault();
      this.props.onSelect(this.props.value, this.props.label, this.props.icon);
  }

  render() {
      // slds-has-icon--left
    return (
      <li className="slds-dropdown__item" role="menuitem option" tabIndex="-1">
        <a href="#" tabIndex="-1" className="slds-truncate" onClick={this.clickHandler}>
          {this.props.label}
          {this.props.icon ?
          <Icon category="utility" name={this.props.icon} size="small" position="right"/>
          : ""}
        </a>
      </li>
    );
  }
}


 class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    let items = this.props.items.map((item) => React.cloneElement(item, {onSelect: this.props.onChange}));
    let className = "slds-dropdown slds-dropdown--menu";
    if (this.props.position) className = className + " slds-dropdown--" + this.props.position;
    if (this.props.size) className = className + " slds-dropdown--" + this.props.size;
    return (
      <div className={className}>
        {this.props.header ?
        <div className="slds-dropdown__header">
            <span className="slds-text-heading--label">{this.props.header}</span>
        </div> : ""}
        <ul className="slds-dropdown__list" role="menu">
            {items}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  position: React.PropTypes.string
};

Dropdown.defaultProps = {
  position: "right"
};



export class ButtonDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      label: this.props.label || 'Select an option'
    };
    this.changeHandler = this.changeHandler.bind(this);
  }


  changeHandler(value, label, icon) {
      this.setState({value: value, label: label, icon: icon, opened: false});
      this.props.onChange(value, label);
  }

  render() {
    let label;
    let icon;
    let items = this.props.children;
    for (let i=0; i<items.length; i++) {
      let item = items[i];
      if (item.props[this.props.valueField] == this.state.value) {
          label = item.props[this.props.labelField];
          icon = item.props[this.props.iconField];
          break;
      }
    }
    let className = "slds-button slds-button--icon-more";
    return (
      <div className="slds-dropdown-trigger" aria-haspopup="true">
          <button className={className} aria-haspopup="true">
              <ButtonIcon name={icon || this.props.icon}/>
              <span className="slds-assistive-text">Settings</span>
              <ButtonIcon name="down" size="x-small"/>
              <span className="slds-assistive-text">More</span>
          </button>
          <Dropdown header={this.props.header}
                    valueField={this.props.valueField}
                    labelField={this.props.labelField}
                    items={this.props.children}
                    size="small"
                    onChange={this.changeHandler}/>
      </div>
    );
  }
}

ButtonDropdown.propTypes = {
  valueField: React.PropTypes.string,
  labelField: React.PropTypes.string,
  iconField: React.PropTypes.string
}

ButtonDropdown.defaultProps = {
  valueField: "value",
  labelField: "label",
  iconField: "icon"
};

export class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(value, label) {
      this.setState({value: value, label: label, opened: false});
      this.props.onChange(value, label);
  }

  render() {
    return (
      <div className="slds-dropdown-trigger" aria-haspopup="true">
          <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
            <ButtonIcon name="down" size="small"/>
            <span className="slds-assistive-text">More</span>
          </button>
          <Dropdown header={this.props.header}
            valueField={this.props.valueField}
            labelField={this.props.labelField}
            items={this.props.children}
            onChange={this.changeHandler}/>
      </div>
    );
  }

}


