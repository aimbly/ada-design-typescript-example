import styled from 'styled-components';
import { Text, View, Flex, withAccessibilityErrors } from 'ada-design';

const CircleIcon = () => <View width={30} height={30} borderRadius={30} backgroundColor="#232626" marginRight={8} />;

const SideBarItem = ({ label, fontWeight }: { label: string; fontWeight?: string }) => (
  <StyledSideBarItem forwardedAs="li" alignItems="center" marginBottom={12}>
    <CircleIcon />
    <Text fontWeight={fontWeight}>{label}</Text>
  </StyledSideBarItem>
);
const SideBar = () => {
  return (
    <StyledSideBar as="ul">
      <SideBarItem label="Rafael Câmara" fontWeight="bold" />
      <SideBarItem label="COVID - Information Center" />
      <SideBarItem label="Friends" />
      <SideBarItem label="Groups" />
      <SideBarItem label="Marketplace" />
      <SideBarItem label="See more details" />
    </StyledSideBar>
  );
};

const StyledSideBar = styled(Flex)`
  width: 250px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledSideBarItem = styled(Flex)`
  background-color: #1a1b1c;
  border-radius: 8px;
  padding: 8px;

  &:hover {
    filter: brightness(1.1);
  }
`;
export default withAccessibilityErrors(SideBar);
