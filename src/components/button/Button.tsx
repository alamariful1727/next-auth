import { Button as HeadlessButton } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

type ButtonType = "default" | "default-dark" | "primary";
type ButtonSize = "small" | "medium" | "large";
interface IButtonProps {
  className?: string;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  type = "default",
  size = "medium",
  disabled,
}: React.PropsWithChildren<IButtonProps>) => {
  return (
    <HeadlessButton
      disabled={disabled}
      className={clsx(
        "rounded font-semibold shadow-sm",
        {
          "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100":
            type === "default",
          "bg-gray-700 text-white hover:bg-gray-800": type === "default-dark",
          "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600":
            type === "primary",
        },
        {
          "px-2.5 py-1.5 text-sm": size === "small",
          "px-3 py-2 text-sm": size === "medium",
          "px-3.5 py-2.5 text-sm": size === "large",
        },
        {
          "cursor-not-allowed disabled:opacity-60": disabled,
        },
        className,
      )}
    >
      {children}
    </HeadlessButton>
  );
};
