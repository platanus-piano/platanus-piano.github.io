export type TMenuDrawerGroup = {
  groupName: string;
  contents: {
    name: string;
    onClick: () => void;
    primary: boolean;
  }[];
};
