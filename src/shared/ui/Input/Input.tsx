import { InputHTMLAttributes, memo } from "react";
type HTMLAppInputProps = Omit<
 InputHTMLAttributes<HTMLInputElement>,
 "value" | "onChange"
>;
interface InputProps extends HTMLAppInputProps {
 className?: string;
 value?: string;
 error?: string;
 label?: string;
 onChange?: (text: string) => void;
}

export const Input = memo((props: InputProps) => {
 const { className, value, error, label, onChange } = props;
 return (
  <>
   {label && <label htmlFor={label}>{label}</label>}
   <input
    value={value}
    onChange={(e) => onChange?.(e.target.value)}
    id={label}
    className={className}
   />
  </>
 );
});
