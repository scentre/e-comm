import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">{children}</div>
  );
};

export default Container;
