import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReduxInfiniteScroll from 'redux-infinite-scroll';
import {FlatButton, Divider, Paper, TextField, } from 'material-ui';
import { selectContact } from '../actions/index';

class ContactList extends Component {

  renderContactsList() {
    return this.props.contacts.map(contact => {
      return (
        <FlatButton
          label={`${contact.firstName} ${contact.lastName}`}
          secondary={true}
          key={contact.index}
          style={styles.button}
          hoverColor='#DADCDE'
          onClick={() => this.props.selectContact(contact)}>
        </FlatButton>
      );
    });
  }

  render() {
    return (
      <Paper
        style={styles.wrapper}
        zDepth={1}>
        <h2>Contact List</h2>
        {this.renderContactsList()}
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectContact: selectContact }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

const styles = {
  button: {
    display: 'block',
    width: '100%',
  },
  wrapper: {
    textAlign: 'center',
    overflow: 'scroll',
    width: '300px',
    height: '100%',
    backgroundColor: 'white',
    marginTop: '-65px',
    paddingTop: '70px',
  },
};
