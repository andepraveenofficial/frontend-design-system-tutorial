import React, { PropsWithChildren } from "react";


/*
Button Component : 
1. variant
2. size
3. functionality
*/

/* -----> ComponentProps <----- */
type ButtonProps = PropsWithChildren<{
  variant: "primary" | "secondary" | "danger";
  size: "sm" | "md" | "lg";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
}>;


/* -----> Component <----- */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  fullWidth = false,
  disabled = false,
  type = "button",
}) => {
  // Base classes always applied
  const baseClasses = "rounded-md font-medium transition-all duration-200 flex items-center justify-center gap-2";

  //  different variants : Record<KeyType, ValueType>
  const variantClasses: Record<ButtonProps["variant"], string> = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200",
    danger: "text-white bg-red-600 hover:bg-red-700",
  };

  // different sizes
  const sizeClasses: Record<ButtonProps["size"], string> = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2.5 px-5 text-lg",
  };

  // Width classes
  const widthClasses = fullWidth ? "w-full" : "w-auto";

  // State Classes
  const stateClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer";

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClasses}
        ${stateClasses}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
