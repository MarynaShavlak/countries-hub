interface InfoProps {
  [key: string]: string | number;
}

export interface CardProps {
  img: string;
  name: string;
  info: InfoProps;
  onClick: () => void;
}
