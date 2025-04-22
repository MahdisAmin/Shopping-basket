import Link from 'next/link'
import { TbListDetails } from "react-icons/tb";

function Card({ data }) {
    const {id , title , price , image}=data
  return (
      <div>
          <img src={image} alt={title} className="w-48 h-48 object-cover" />
          <h2 className="text-lg font-bold">{title}</h2>
          <div>
             <Link href={`/products/${id}`}><TbListDetails/></Link>
          </div>
    </div>
  )
}

export default Card