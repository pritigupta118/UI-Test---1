import { Bath, BedDouble, Landmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";


interface PropertyCardState {
  title: string;
  description: string;
  imgUrl: string;
  tags: string[];
  price: string;
  button: string
}

const Card: React.FC<PropertyCardState> = ({ title, description, imgUrl, tags, price, button }) => {
  return (
   
    <div className="rounded-2xl shadow-md  border-[2px] border-[#262626] p-4">
      <img src={imgUrl} alt={title} className="w-full  object-cover rounded-2xl" />
      <div className="py-5">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex gap-1 md:gap-4 flex-wrap text-sm">
        <Badge className="bg-[#1A1A1A] border-[#262626] border-2 px-[8px] py-[14px] rounded-[28px] font-medium"> <BedDouble width="24px" height="24px" /> {tags[0]}</Badge>
        <Badge className="bg-[#1A1A1A] border-[#262626] border-2 px-[8px] py-[14px] rounded-[28px] font-medium"> <Bath width="24px" height="24px" /> {tags[1]}</Badge>
        <Badge className="bg-[#1A1A1A] border-[#262626] border-2 px-[8px] py-[14px] rounded-[28px] font-medium"> <Landmark width="24px" height="24px" /> {tags[2]}</Badge>
      </div>
      <div className="flex items-center justify-between pt-4 gap-[8px]">
        <div className="flex flex-col items-start justify-between">
       <p className="font-medium text-sm text-[#999999] font-display">Price</p>
       <h4 className="font-semibold text-white mb-1">
        {price}
       </h4>
        </div>
       
       
      <Button style={{ backgroundColor: "#703BF7", color: "#fff" }} className="hover:bg-purple-700">{button}</Button>
      </div>
    </div>
  )
}

export default Card
