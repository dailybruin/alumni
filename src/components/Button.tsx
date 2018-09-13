import styled from 'react-emotion';
import { colors } from '../utils/global-styles';

const Button = styled('button')`
  background-color: ${(props: any) =>
    props.primary ? colors.gold : colors.blue};
  border-radius: 4px;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 0.75rem;
  height: 3rem;
  letter-spacing: 0.025rem;
  line-height: 3.075rem;
  padding: 0 2.5rem;
  text-align: center;
  text-transform: uppercase;
`;

export default Button;
