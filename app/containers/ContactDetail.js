import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatButton, Divider, Paper, List, ListItem, CommunicationCall,
  CommunicationChatBubble, Colors, ContentInbox, SvgIcon} from 'material-ui';
import {CommunicationPhone, SocialPerson, ActionHome,
  CommunicationEmail} from 'material-ui/lib/svg-icons';

class ContactDetail extends Component {
  render() {
    if (!this.props.contact) {
      return (
        <Paper
          style={styles.wrapper}
          zDepth={1}>
          <h2 style={styles.titlePlease}>Please, select a contact to display</h2>
        </Paper>
      );
    }

    const { firstName, lastName, address, phone, email, } = this.props.contact;
    return (
      <Paper
        style={styles.wrapper}
        zDepth={1}>
        <List>
          <ListItem
            style={styles.list}
            primaryText= {`${firstName} ${lastName}`}
            disabled={true}
            leftIcon={<SocialPerson />} />
          <ListItem
            style={styles.list}
            primaryText= {address}
            disabled={true}
            leftIcon={<ActionHome />} />
          <ListItem
            style={styles.list}
            primaryText= {phone}
            disabled={true}
            leftIcon={<CommunicationPhone />} />
          <ListItem
            style={styles.list}
            primaryText= {email}
            disabled={true}
            leftIcon={<CommunicationEmail /> } />
        </List>
        <Divider />
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.activeContact,
  };
};

export default connect(mapStateToProps)(ContactDetail);

const styles = {
  titlePlease: {
    margin: '250px 0px',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    margin: '0px auto',
  },
  list: {
    marginLeft: 150,
    textAlign: 'left',
    color: '#626262',
  },
};
