export type TyleProps = {
    className?: string;
    alt: string;
    src: string;
    onClick?: () => void;
  } & ImageTitleProps;
  
  export type ImageTitleProps = {
    $imageTitle?: string;
  };