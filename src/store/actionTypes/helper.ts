import { merge } from "ramda";

const createAsyncActionType = (prefix: string) => {
  const obj = {};
  obj[`${prefix}_REQUEST`] = `${prefix}_REQUEST`;
  obj[`${prefix}_SUCCESS`] = `${prefix}_SUCCESS`;
  obj[`${prefix}_FAILURE`] = `${prefix}_FAILURE`;
  return obj;
};

const createSyncActionType = (prefix: string) => {
  const obj = {};
  obj[`${prefix}`] = prefix;
  return obj;
};

export const createAsyncActions = (...col: string[]) => {
  const actionsObj = col.reduce(
    (acc, el) => merge(acc, createAsyncActionType(el)),
    {}
  );
  return actionsObj;
};

export const createSyncActions = (...col: string[]) => {
  const actionsObj = col.reduce(
    (acc, el) => merge(acc, createSyncActionType(el)),
    {}
  );
  return actionsObj;
};
