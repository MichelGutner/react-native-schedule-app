import 'moment/locale/pt-br';
import moment from 'moment';

export const formattedOnlyDateDay = (date: Date) => moment(date).format('LL');
export const formattedFullDateDay = (date: Date) => moment(date).format('LLLL');
