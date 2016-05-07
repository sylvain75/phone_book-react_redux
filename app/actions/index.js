export function selectContact(contact) {
  //selectContact is an action creator, it need to return an action
  // = object with type property
  return {
    type: 'CONTACT_SELECTED',
    payload: contact,
  };
}
