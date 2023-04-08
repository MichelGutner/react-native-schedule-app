export type TIconProps = {
  d: string;
  fill?: string;
  width?: number;
  height?: number;
  optionalPath?: any;
};

export interface IIcon {
  name: TUnionType<'UniquePath' | 'ManyPaths'>;
  size?: number;
  color?: string;
}

export type TUnionUniquePathIcons = 'search' | 'arrow_left' | 'calender';
export type TUnionMorePathsIcons = 'hygiene';

type UniquePath = 'UniquePath';
type MorePaths = 'ManyPaths';

export type TUnionType<T extends UniquePath | MorePaths> = T extends UniquePath
  ? TUnionUniquePathIcons
  : TUnionMorePathsIcons;
