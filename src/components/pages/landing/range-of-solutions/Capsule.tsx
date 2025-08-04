import React from "react";

interface Props {
  name: string;
}

const Capsule = ({ name }: Props) => {
  return (
    <div className="px-5 py-[10px] rounded-[30px] opacity-60 bg-black text-white max-xl:px-3 max-xl:py-1.5 max-xl:rounded-2xl max-[800px]:!text-[12px]">
      {name}
    </div>
  );
};

export default Capsule;
