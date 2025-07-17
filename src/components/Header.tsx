
  interface HeadingState {
  title: string;
  description: string
}
const Header: React.FC<HeadingState> = ({title, description}) => {

  return (
    <div className="flex items-start justify-between mb-12">
      <div>
        <h2 className="font-display font-semibold text-[30px] md:text-[48px] mb-4">{title}</h2>
        <p className="font-display font-medium text-sm md:text-[18px] text-[#999999]">{description}</p>
      </div>
    </div>
  )
}

export default Header
