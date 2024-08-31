import { cn } from "@repo/utils/cn";

const Input = ({ className, ...props }) => {
  return <input className={cn("input", className)} {...props} />;
};

export { Input };
