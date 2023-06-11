export interface ICustomSelect {
  items: string[];
  active?: string;
  onClick: () => void;
}

export interface ICustomSelectItemProps {
  item: string;
  active?: string;
  onClick: () => void;
}
