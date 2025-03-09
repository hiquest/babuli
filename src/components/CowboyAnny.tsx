import Cowboy from "./Cowboy";

type Props = {
  // in percent from 0 to 100
  value: number;
};

const CowboyAnny = ({ value }: Props) => {
  return (
    <Cowboy
      className="cowboy-anny"
      cowboyPath="/c1.png"
      facePath="/head_anny.png"
      value={value}
    />
  );
};

export default CowboyAnny;
