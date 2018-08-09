import styled from 'react-emotion';

const Button = styled('button')`
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  font-size: 0.75rem;
  height: 3rem;
  line-height: 3.075rem;
  padding: 0 2.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.025rem;
  background-color: ${(props: any) => (props.primary ? '#ffcc59' : '#4a98e2')};
  color: #fff;
`;

export default Button;
