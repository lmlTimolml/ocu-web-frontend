import { Children } from "react";
import { Fragment } from "react";

export default function Breadcrumb({ children }) {
  const childrenArray = Children.toArray(children);


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
    <nav className="mx-5 md:mx-10 lg:m-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 max-w-[1440px]" aria-label="breadcrumb">
      <ol className="p-1 flex items-center space-x-4 text-sm">{childrenWtihSeparator}</ol>
    </nav>
  );
};
