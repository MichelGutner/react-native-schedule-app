import { Dispatch, SetStateAction } from 'react';

export interface IDatePicker {
  visible: boolean;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  onClose: Dispatch<SetStateAction<boolean>>;
}
