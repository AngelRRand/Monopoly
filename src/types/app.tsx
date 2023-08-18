import { ITextProps } from 'native-base';



export interface GradientTextProps extends ITextProps {
    children: React.ReactNode;
    style?: any;  // Puedes especificar un tipo más detallado según tus necesidades
  }