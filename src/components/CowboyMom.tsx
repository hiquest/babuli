import Cowboy from "./Cowboy";

type Props = {
  // in percent from 0 to 100
  value: number;
};

const CowboyMom = ({ value }: Props) => {
  console.log(value);
  return (
    <Cowboy
      className="cowboy-mom"
      cowboyPath="/c2.png"
      facePath="/mom.png"
      value={value}
    />
  );
};

export default CowboyMom;
