import { Button } from 'ada-design';
import styled from 'styled-components';

type Props = {
  icon: string;
  width?: number;
  isActive?: boolean;
  ariaLabel?: string;
};

const IconButton: React.FC<Props> = ({ width, icon, isActive, ariaLabel }) => {
  return (
    <StyledIconButton
      variant="icon"
      icon={icon}
      width={width}
      height="100%"
      backgroundColor="transparent"
      justifyContent="center"
      border="0"
      borderBottom={isActive && '2px solid #1786ee'}
      ariaLabel={ariaLabel}
    />
  );
};

const StyledIconButton = styled(Button)`
  &:hover {
    background-color: #383b3b;
  }
`;

export default IconButton;
