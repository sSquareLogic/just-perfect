import Image from "next/image";

interface IProps {
  text?: string;
  icon?: string;
  isSubmit?: boolean;
  onClick?: () => void;
}

const GreenBtn = ({
  icon,
  isSubmit,
  text = "",
  onClick = () => null,
}: IProps) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      className="bg-GREEN p-6 rounded-lg w-full flex justify-center hover:bg-GREEN_HOVER transition-all"
    >
      <div className="flex items-center gap-4">
        <span className="font-GR text-BLACK text-TEXT font-bold">{text}</span>
        {icon ? (
          <Image
            src={icon}
            alt="icon"
            unoptimized
            unselectable="off"
            width={24}
            height={24}
            className="object-contain w-6 h-6"
          />
        ) : null}
      </div>
    </button>
  );
};

export default GreenBtn;
