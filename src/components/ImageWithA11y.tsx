import { withAccessibilityErrors } from 'ada-design';

type Props = {
  src: string;
};

const RegularImage: React.FC<Props> = ({ src }) => {
  return <img src={src} className="App-logo" alt="logo" />;
};

export default withAccessibilityErrors<Props>(RegularImage);
