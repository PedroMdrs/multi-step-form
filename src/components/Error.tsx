import React from "react";

const Error = ({
  children,
  ...props
}: React.PropsWithChildren & React.ComponentProps<"div">) => {
  return (
    <span
      style={{
        color: "var(--color-5)",
        fontFamily: "var(--family-bold)",
        fontSize: "var(--paragraph)",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Error;
