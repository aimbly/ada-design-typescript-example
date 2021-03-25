import { Flex, Text, Link, Modal, ModalVariantType } from 'ada-design';

type Props = {
  variant?: ModalVariantType;
  isOpen: boolean;
  closeModal: () => void;
};

const AwesomeModal: React.FC<Props> = ({ variant, isOpen, closeModal }) => {
  const isTrailModal = variant === 'trail';

  return (
    <Modal variant={variant} isOpen={isOpen} closeModal={closeModal}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" marginBottom={isTrailModal ? 32 : 0}>
        <Text>
          Edit <Text as="code">src/App.js</Text> and save to reload.
        </Text>
        <Link href="https://reactjs.org" color="#61dafb" fontSize={16} fontWeight="bold" marginTop={12}>
          Learn React
        </Link>
      </Flex>
    </Modal>
  );
};

export default AwesomeModal;
