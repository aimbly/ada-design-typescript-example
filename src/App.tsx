import { useState } from 'react';
import { A11yContextProvider, Flex, Text, Button, ModalVariantType } from 'ada-design';
import styled from 'styled-components';

import Image from './components/ImageWithA11y';
import AwesomeModal from './components/AwesomeModal';

import logo from './logo.svg';
import './App.css';

const isDev = (): boolean => {
  return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<ModalVariantType>('default');

  const isTrailModal = modalVariant === 'trail';

  return (
    <A11yContextProvider isEnabled={isDev()}>
      <AppHeader as="header">
        <Image src={logo} />

        <Text marginBottom={24}>Current modal variant: {modalVariant}</Text>

        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>

        <Button
          className="my-awesome-custom-button"
          shouldShowSuccess={false}
          variant="primary"
          marginTop={12}
          onClick={() => setModalVariant(isTrailModal ? 'default' : 'trail')}
        >
          Toggle Modal Variant
        </Button>

        <AwesomeModal isOpen={isModalOpen} variant={modalVariant} closeModal={() => setIsModalOpen(false)} />
      </AppHeader>
    </A11yContextProvider>
  );
}

const AppHeader = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
