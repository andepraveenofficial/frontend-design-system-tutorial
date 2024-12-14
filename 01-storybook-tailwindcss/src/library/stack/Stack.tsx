import React, { PropsWithChildren } from "react";
import { twMerge } from 'tailwind-merge';

/*
Stack Component : 
1. orientation - horizontal or vertical
2. gap - spacing between items
3. custom className support - allows extending styles with custom Tailwind classes
*/

/* -----> Types <----- */
type StackOrientation = "horizontal" | "vertical";

/* -----> ComponentProps <----- */
type StackProps = PropsWithChildren<{
  orientation?: StackOrientation;
  className?: string; // Custom Tailwind classes can be passed here
  stretch?: boolean; // Controls whether items should stretch to fill container
}>;

/* -----> Component <----- */
const Stack: React.FC<StackProps> = ({
  children,
  orientation = "horizontal",
  className = "",
  stretch = true,
}) => {
  // Base classes always applied
  const baseClasses = "flex";

  // Different orientations with their respective classes
  const orientationClasses: Record<StackOrientation, string> = {
    horizontal: `flex-row gap-4 ${stretch ? 'items-stretch' : 'items-center'}`,
    vertical: `flex-col gap-4 ${stretch ? 'items-stretch' : ''}`,
  };

  // Combine all classes using tailwind-merge
  const classes = twMerge([
    baseClasses,
    orientationClasses[orientation],
    className
  ]);

  return <div className={classes}>{children}</div>;
};

export default Stack;
