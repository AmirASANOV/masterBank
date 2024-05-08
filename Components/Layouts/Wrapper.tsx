"use client";
import React, { useRef } from "react";

export interface WrapperProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  useWrapper?: boolean;
  wrapperClassName?: string;
  hidden?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  classNameAdd?: Array<string>;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  id,
  className = "",
  style,
  useWrapper,
  wrapperClassName,
  hidden,
  onClick,
  classNameAdd,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const finalClassName = `${wrapperClassName || ""} ${
    useWrapper || useWrapper === undefined
      ? "wrapper-layout"
      : "wrapper-without-layout"
  } ${className} ${classNameAdd ? classNameAdd.join(" ") : ""}`;

  return (
    <div
      ref={ref}
      className={finalClassName.trim()}
      id={id}
      style={{ overflow: hidden ? "hidden" : "visible", ...style }}
      onClick={onClick}
      aria-hidden={!!hidden}
    >
      {children}
    </div>
  );
};

export default Wrapper;
