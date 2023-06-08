import { IContainer } from "@/types/ui/container.types";

const Container = ({ className, children }: IContainer) => {
  return (
    <div className="container">
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
