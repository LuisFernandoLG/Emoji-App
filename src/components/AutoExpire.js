import { useEffect, useState } from "react";

export const AutoExpire = ({ children, time }) => {
  const [expire, setExpire] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExpire(true);
    }, time);
  }, []);

  if (expire) return null;

  return <>{children}</>;
};
