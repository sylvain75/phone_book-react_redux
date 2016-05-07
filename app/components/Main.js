
import React, {
  Component,
} from 'react';
import ReactDOM from 'react-dom';
import ContactList from '../containers/ContactList';
import ContactDetail from '../containers/ContactDetail';
import {Divider, Paper, TextField, AppBar, } from 'material-ui';

export default class Main extends Component {
  render() {
    return (
      <div style={styles.overHidden}>
        <AppBar
          title='Contact Book'
          showMenuIconButton={false}
          style={styles.appBar}/>
        <div style={styles.wrapper}>
          <ContactList />
          <ContactDetail />
        </div>
      </div>
    );
  }
}

const styles = {
  appBar: {
    textAlign: 'center',
  },
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    overflow: 'hidden',
    height: '100%',
  },
  overHidden: {
    overflow: 'hidden',
    height: '100%',
  },
};
