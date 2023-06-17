interface IProps {
  title: string;
  align?: "left" | "right" | "center";
  link?: string;
}

const SectionTitle = ({ title, align = "left", link }: IProps) => {
  return (
    <h2
      className="section-title text-BLACK text-SM_TITLE font-RW font-bold"
      style={
        align === "center"
          ? { width: "100%", textAlign: align }
          : { textAlign: align }
      }
    >
      {link ? (
        <a href={link} className="text-inherit">
          {title}
        </a>
      ) : (
        title
      )}
    </h2>
  );
};

export default SectionTitle;
