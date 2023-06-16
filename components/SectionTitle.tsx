interface IProps {
  title: string;
}

const SectionTitle = ({ title }: IProps) => {
  return (
    <h2 className="section-title text-BLACK text-SM_TITLE font-RW font-bold">
      {title}
    </h2>
  );
};

export default SectionTitle;
