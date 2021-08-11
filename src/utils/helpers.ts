import { isEmpty, isNil } from "ramda";

export const isNilOrEmpty = (value: any) => isNil(value) || isEmpty(value);
