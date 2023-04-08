import React from 'react';
import DatePick from 'react-native-date-picker';
import { IDatePicker } from './types';

export const DatePicker = ({
  visible,
  date,
  setDate,
  onClose,
}: IDatePicker) => {
  const handleClose = (newDate: Date) => {
    onClose(false);
    setDate(newDate);
  };

  return (
    <DatePick
      modal
      style={{backgroundColor:'black'}}
      locale="pt-br"
      textColor='white'
      theme='dark'
      confirmText="Confirmar"
      cancelText="Sair"
      title="Selecionar Data"
      open={visible}
      date={date}
      onDateChange={setDate}
      onConfirm={(newDate: Date) => {
        handleClose(newDate);
      }}
      onCancel={() => onClose(false)}
    />
  );
};
