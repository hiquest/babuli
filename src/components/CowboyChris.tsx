import Cowboy from "./Cowboy";

type Props = {
  // in percent from 0 to 100
  value: number;
};

const CowboyChris = ({ value }: Props) => {
  return (
    <Cowboy
      className="cowboy-chris"
      cowboyPath="/c3.png"
      facePath="/chris.png"
      value={value}
    />
  );
};

export default CowboyChris;
