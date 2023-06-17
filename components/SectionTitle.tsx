interface IProps {
  title: string;
  align?: "left" | "right" | "center";
}

const SectionTitle = ({ title, align = "left" }: IProps) => {
  return (
    <h2
      className="section-title text-BLACK text-SM_TITLE font-RW font-bold"
      style={
        align === "center"
          ? { width: "100%", textAlign: align }
          : { textAlign: align }
      }
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
