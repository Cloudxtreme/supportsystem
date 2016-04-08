import React, {Component} from 'react';
import {DataGrid} from '../components/DataGrid';

export class AccountList extends Component {
  constructor (props) {
    super (props);
    this.linkHandler = this.linkHandler.bind(this);
    this.actionHandler = this.actionHandler.bind(this);
  }

  linkHandler(property) {
    window.location.hash = "#property/" + property.property_id;
  }

  actionHandler(data, value, label) {
    if (label === "Delete") {
        this.props.onDelete(data);
    } else if (label === "Edit") {
        this.props.onEdit(data);
    }
  }
  render2() {
    return (<div><h2>DataGrid</h2></div>)
  }
  render() {
    return (
        <DataGrid data={this.props.accounts} keyField="acc_UIC" onSort={this.props.onSort} onAction={this.actionHandler}>
            <div header="Login" field="acc_login" sortable={true} onLink={this.linkHandler}/>
            <div header="First Name" field="acc_firstname" sortable={true}/>
            <div header="Last Name" field="acc_lastname" sortable={true}/>
            <div header="Team" field="acc_team" sortable={true}/>
            <div header="Location" field="acc_location" sortable={true}/>
            <div header="Region" field="acc_region" sortable={true}/>
        </DataGrid>
    );
  }

}