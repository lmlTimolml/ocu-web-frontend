import { Children } from "react";
import { Fragment } from "react";

export default function Breadcrumb({ children }) {
  const childrenArray = Children.toArray(children);

  console.log(childrenArray);

  const childrenWtihSeparator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child
  });

  return (
    <nav className="max-w-[960px] mx-auto antialiased" aria-label="breadcrumb">
      <ol className="p-1 flex items-center space-x-4 text-sm">{childrenWtihSeparator}</ol>
    </nav>
  );
};
