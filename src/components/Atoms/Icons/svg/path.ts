import { TUnionType } from '../types';

const calendar =
  'M12 19a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z';
const search =
  'M20.71 19.29 16.46 15A7.52 7.52 0 1 0 15 16.46l4.25 4.25a1 1 0 0 0 1.42 0 .999.999 0 0 0 .04-1.42ZM5 10.5a5.5 5.5 0 1 1 5.5 5.5A5.51 5.51 0 0 1 5 10.5Z';
const arrowLeft =
  'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z';

export const uniquePathSvg: Record<TUnionType<'UniquePath'>, string> = {
  arrow_left: arrowLeft,
  search: search,
  calender: calendar,
};
