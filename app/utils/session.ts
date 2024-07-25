// src/utils/session.ts
import { v4 as uuidv4 } from 'uuid';

const SESSION_ID_KEY = 'sessionID';

export const getSessionID = (): string => {
  // Check if sessionID exists in local storage
  let sessionID = localStorage.getItem(SESSION_ID_KEY);

  if (!sessionID) {
    // Generate a new sessionID if not found
    sessionID = uuidv4();
    localStorage.setItem(SESSION_ID_KEY, sessionID);
  }
  
  return sessionID;
};
