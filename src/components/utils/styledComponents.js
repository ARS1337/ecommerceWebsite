import styled from "styled-components";
import {Container} from 'react-bootstrap';

const Regular13Container = styled(Container)`
  font-family: PoppinsRegular;
  font-size: 13px;
  justify-content: center;
`;
const Regular13SemiBold = styled(Container)`
  font-family: PoppinsSemiBold;
  font-size: 13px;
  justify-content: center;
`;
const NewRegular13Container = styled(Container)`
  padding-bottom: 4em;
  text-align: center;
`;
const SemiBold22Container = styled(Container)`
  font-family: PoppinsSemiBold;
  font-size: 22px;
  padding-bottom: 1em;
  text-align: center;
  justify-content: center;
`;
const Regular14 = styled(Container)`
  font-family: PoppinsRegular;
  font-size: 14px;
`;
const SemiBold14 = styled(Container)`
  font-family: PoppinsSemiBold;
  font-size: 14px;
`;
const Content = styled(Container)`
  padding: 1em;
`;
const RoundContainers = styled(Content)`
  border-radius: 30px;
`;
export {RoundContainers,Content,SemiBold14,Regular14,SemiBold22Container,NewRegular13Container,Regular13SemiBold,Regular13Container};