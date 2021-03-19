import { createAction } from "@reduxjs/toolkit";
import { FILTER_ITEM } from "../../constants";

export const changeType = createAction(FILTER_ITEM);

// export const changeType = (filter)=> ({
//   type: FILTER_ITEM,
//   payload: filter
// })
