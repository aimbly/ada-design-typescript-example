import { Link } from 'react-router-dom';
import { Flex, Text, withAccessibilityErrors } from 'ada-design';

import FacebookLogo from './icons/FacebookLogo';

import IconButton from './core/IconButton';

const NavBar = () => {
  return (
    <Flex
      height={56}
      width="100%"
      justifyContent="space-between"
      backgroundColor="#232626"
      borderBottom="1px solid #383b3b"
    >
      <Flex alignItems="center" marginLeft={16}>
        <FacebookLogo />
      </Flex>

      <Flex alignItems="center">
        <Link to="/">
          <IconButton width={110} isActive icon="FiHome" ariaLabel="Home" />
        </Link>
        <Link to="/watch">
          <IconButton width={110} icon="FiTv" ariaLabel="Watch" />
        </Link>
        <Link to="/marketplace">
          <IconButton width={110} icon="FiBriefcase" ariaLabel="Marketplace" />
        </Link>
        <Link to="/groups">
          <IconButton width={110} icon="FiRadio" ariaLabel="Groups" />
        </Link>
        <Link to="/games">
          <IconButton width={110} icon="FiShield" ariaLabel="Games" />
        </Link>
      </Flex>

      <Flex alignItems="center">
        <Text color="rgb(228, 230, 235)" fontWeight="bold" marginRight={15}>
          Rafael
        </Text>
        <IconButton width={50} icon="FiPlus" ariaLabel="New Post" />
        <IconButton width={50} icon="FiMessageCircle" ariaLabel="Messanger" />
        <IconButton width={50} icon="FiBell" ariaLabel="Notifications" />
      </Flex>
    </Flex>
  );
};

export default withAccessibilityErrors(NavBar);
