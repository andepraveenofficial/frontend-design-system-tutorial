import React, { PropsWithChildren } from "react";

/* -----> ComponentProps <----- */
type ButtonProps = PropsWithChildren<{
	variant: "primary" | "secondary" | "danger";
	size: "sm" | "md" | "lg";
	onClick?: () => void;
}>;

/* -----> Component <----- */
const Button: React.FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	onClick,
}) => {
	// Tailwind classes for different variants
	// Record<KeyType, ValueType>
	const variantClasses: Record<ButtonProps["variant"], string> = {
		primary: "text-white bg-blue-700 hover:bg-blue-800", // Blue background, white text
		secondary: "text-white bg-gray-800 hover:bg-gray-900", // Gray background, white text
		danger: "text-white bg-red-700 hover:bg-red-800", // Gray background, white text
	};

	// Tailwind classes for different sizes
	const sizeClasses: Record<ButtonProps["size"], string> = {
		sm: "py-2 px-4 text-sm", // Small padding and font size
		md: "py-3 px-5 text-base", // Medium padding and font size
		lg: "py-4 px-6 text-lg", // Large padding and font size
	};

	return (
		<button
			className={`
        ${variantClasses[variant]}   
        ${sizeClasses[size]}         
        rounded-md                  
        outline-none border-none cursor-pointer
      `}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;

/*
Button Component : 
1. variant
2. size
3. functionality
*/
