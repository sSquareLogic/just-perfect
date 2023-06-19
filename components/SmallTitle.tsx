interface IProps {
  title: string;
}
const SmallTitle = ({ title }: IProps) => {
  return <h3 className="font-GR text-BLACK text-LG_TEXT font-bold">{title}</h3>;
};

export default SmallTitle;
