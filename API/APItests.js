// API/APItests.js

import dataEvent from '../Helpers/testDataEvent'
import dataContact from '../Helpers/testDataSearch'

export function getEvent(idEvent){
  return dataEvent[idEvent-1]
}

export function getContact(idContact){
  return dataContact[idContact-1]
}
