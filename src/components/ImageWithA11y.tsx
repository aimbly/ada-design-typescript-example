import { withAccessibilityErrors } from 'ada-design';

type Props = {
  src: string;
  alt?: string;
};

const RegularImage: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} className="App-logo" alt={alt} />;
};

export default withAccessibilityErrors<Props>(RegularImage);
