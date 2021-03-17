import {ADD_ITEM} from '../constants/formConstants'

export const addTask = (task)=>({
  type: ADD_ITEM,
  payload: task
})