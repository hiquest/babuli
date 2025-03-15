type Corner = {
  top: number | string;
  left: number | string;
};

const corners: Record<string, Corner> = {
  topLeft: { top: -100, left: 0 },
  topRight: { top: -100, left: "calc(100% - 100px)" },
  bottomLeft: { top: "calc(100%)", left: 0 },
  bottomRight: { top: "calc(100%)", left: "calc(100% - 100px)" },
};

const keys = Object.keys(corners);

export const getRandomPair = () => {
  const ind1 = Math.floor(Math.random() * keys.length);
  let ind2 = Math.floor(Math.random() * keys.length);
  while (ind1 === ind2) {
    ind2 = Math.floor(Math.random() * keys.length);
  }

  return [corners[keys[ind1]], corners[keys[ind2]]];
};
