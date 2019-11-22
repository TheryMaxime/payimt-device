// API/APItests.js

import dataEvent from '../Helpers/testDataEvent'
import dataContact from '../Helpers/testDataSearch'

export function getEvent(idEvent){
  return dataEvent[idEvent]
}

export function getContact(idContact){
  return dataContact[idContact]
}
