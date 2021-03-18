import { createAction } from "@reduxjs/toolkit";
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from "../../constants";

export const addTask = createAction(ADD_ITEM);
export const deleteTask = createAction(DELETE_ITEM);
export const editTask = createAction(EDIT_ITEM);
