import React, {Component} from 'react';
import {HomeHeader} from '../components/homeheader';
import {AccountList} from './accountlist';
import { connect} from 'react-redux';
import { fetchAccounts, fetchAccountsSorted } from '../actions/index';

 class AccountHome extends React.Component {

  constructor(props) {
   
    super(props);
    this.state = {view: "grid", sortOrder: "lastName", accounts: []};
    this.sortHandler = this.sortHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.viewChangeHandler = this.viewChangeHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  componentWillMount() {
      this.props.fetchAccounts();
  }

  componentDidMount() {
    console.log('mounted')
  }

	sortHandler(sortOrder) {
    console.log('sortOrder', sortOrder);
    this.props.fetchAccountsSorted(sortOrder);
	}

	deleteHandler(data) {
	}

	editHandler(data) {
	    window.location.hash = "#account/" + data.property_id + "/edit";
	}

	viewChangeHandler(value) {
	    this.setState({view: value});
	}

	newHandler() {
	    this.setState({addingAccount: true});
	}

	saveHandler(account) {
	}

	cancelHandler() {
	    this.setState({addingAccount: false});
	}

  render() {
    let view = <AccountList accounts={this.props.accounts} onSort={this.sortHandler} onDelete={this.deleteHandler} onEdit={this.editHandler}/>;
    
    return (
       <div>
        <HomeHeader type="accounts"
                    title="My Accounts"
                    newLabel="New Account"
                    actions={[{value:"new", label:"New Account"}]}
                    itemCount={this.props.accounts.length}
                    viewOptions={[{value:"table", label:"Table", icon:"table"},{value:"map", label:"Map", icon:"location"},{value:"split", label:"Split", icon:"layout"}]}
                    sortOptions={[{value:"acc_login", label:"Login"},{value:"acc_lastname", label:"Name"},{value:"acc_location", label:"Location"}]}
                    onNew={this.newHandler}
                    onSort={this.sortHandler}
                    onViewChange={this.viewChangeHandler}/>
        {view}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts.all
    }
}

export default connect(mapStateToProps, {fetchAccounts, fetchAccountsSorted})(AccountHome);