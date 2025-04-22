import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full flex justify-center  mt-[10px]">
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
}

export default Loader;
