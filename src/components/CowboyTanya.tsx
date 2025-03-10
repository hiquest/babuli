import Cowboy from "./Cowboy";

type Props = {
  // in percent from 0 to 100
  value: number;
};

const CowboyTanya = ({ value }: Props) => {
  console.log(value);
  return (
    <Cowboy
      className="cowboy-tanya"
      cowboyPath="/c4.png"
      facePath="/tanya.png"
      value={value}
    />
  );
};

export default CowboyTanya;
