import Cowboy from "./Cowboy";

type Props = {
  // in percent from 0 to 100
  value: number;
};

const CowboyYanis = ({ value }: Props) => {
  console.log(value);
  return (
    <Cowboy
      className="cowboy-yanis"
      cowboyPath="/c5.png"
      facePath="/yanis.png"
      value={value}
    />
  );
};

export default CowboyYanis;
