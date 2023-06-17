"use client";
import { ReactNode, useEffect, useState } from "react";
import { useIsMounted } from "usehooks-ts";

interface IProps {
  children: ReactNode;
}

const ClientOnly = ({ children }: IProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted()) setHasMounted(true);
    else setHasMounted(false);
  }, [isMounted]);
  return (
    <div className="clientOnlyComponent">{hasMounted ? children : null}</div>
  );
};

export default ClientOnly;
