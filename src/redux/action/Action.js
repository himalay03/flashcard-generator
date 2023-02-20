import {
  ADD_GROUP,
  ADD_INPUT_BOX,
  DELETE_INPUT_BOX,
  SHOW_FLASH_CARDS,
} from "../Types";

// addInputBox for adding input box
export const addInputBox = (data) => {
  return {
    type: ADD_INPUT_BOX,
    payload: data,
  };
};

// deleteInputBox for deleting input box
export const deleteInputBox = (data) => {
  return {
    type: DELETE_INPUT_BOX,
    payload: data,
  };
};

// addGroup for adding group
export const addGroup = (data) => {
  return {
    type: ADD_GROUP,
    payload: data,
  };
};

// showFlashCard for showing flashcards
export const showFalshCard = (data) => {
  return {
    type: SHOW_FLASH_CARDS,
    payload: data,
  };
};
