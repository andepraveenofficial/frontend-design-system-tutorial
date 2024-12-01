import React, { PropsWithChildren } from "react";

/* -----> ComponentProps <----- */
type ButtonProps = PropsWithChildren<{
	variant: "primary" | "secondary";
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
		primary: "bg-blue-500 text-white", // Blue background, white text
		secondary: "bg-gray-500 text-black", // Gray background, black text
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
        hover:opacity-80             
        transition duration-300
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
