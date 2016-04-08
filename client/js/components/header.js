import React , {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import {Icon} from './icons';

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="menu">
          <ul className="slds-list--horizontal">
            <li className="slds-list__item"><Link to="/"><Icon name="people" theme={null}/>Accounts</Link></li>
            <li className="slds-list__item"><Link to="/planning"><Icon name="client" theme={null}/>Planning</Link></li>
            <li className="slds-list__item"><Link to="accounts"><Icon name="people" theme={null}/>Brokers</Link></li>
          </ul>
        </header>
      </div>
      )
  }
}

