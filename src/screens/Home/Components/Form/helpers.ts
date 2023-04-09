import { formattedOnlyDateDay } from '@/utils';

export const contentViewDetails = (selectedItem?: any) => {
  const data = [
    {
      key: 'Descrição',
      value: selectedItem?.description,
    },
    {
      key: 'Forma de Pagamento',
      value: selectedItem?.card,
    },
    {
      key: 'Status',
      value: 'Em Aberto',
    },
    {
      key: 'Data de criação',
      value: formattedOnlyDateDay(selectedItem?.createdAt as Date),
    },
    {
      key: 'Data',
      value: formattedOnlyDateDay(selectedItem?.date as Date),
    },
    {
      key: 'Ano de referência',
      value: selectedItem?.year,
    },
    {
      key: 'ID',
      value: selectedItem?.id,
    },
  ];
  return { data };
};