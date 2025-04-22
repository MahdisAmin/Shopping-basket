import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";

function Card({ data }) {
  const { id, title, price, image } = data;
  return (
    <div className="w-[270px] m-2.5  p-5 flex flex-col items-start justify-end bg-white border-2 border-dashed border-[#e2e2e2] rounded-[20px]">
      <img
        src={image}
        alt={title}
        className="w-[230px] h-[230px] p-5 mb-5 bg-white "
      />
      <h3 className="text-[#fe5d42] text-[1.1rem] ">{shortenText(title)}</h3>
      <p className="text-[#666] text-[0.9rem] font-bold mt-2.5 mx-0 mb-8">
        {price}
      </p>
      <div className="flex items-center justify-between w-full ">
        <Link
          to={`/products/${id}`}
          className="text-2xl h-[25px] cursor-pointer"
        >
          <TbListDetails className="text-[#fe5d42]" />
        </Link>
        <button className="bg-[#fe5d42] text-white text-2xl h-[32px] p-0.5 rounded-lg cursor-pointer">
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
