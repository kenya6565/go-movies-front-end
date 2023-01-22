export type Input = {
  title: string;
  type: string;
  className: string;
  name: string;
  autoComplete: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
