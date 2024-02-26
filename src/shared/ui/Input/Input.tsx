import { InputHTMLAttributes, memo } from "react";
import styled from "styled-components";
import { Text } from "../Text/Text";
type HTMLAppInputProps = Omit<
 InputHTMLAttributes<HTMLInputElement>,
 "value" | "onChange"
>;
interface InputProps extends HTMLAppInputProps {
 className?: string;
 error?: string;
 label?: string;
 type?: string;
 name?: string;
 value?: string;
 onChange?: (text: string) => void;
}

export const Input = memo((props: InputProps) => {
 const {
  className,
  value,
  error,
  label,
  type = "text",
  name,
  onChange,
  ...otherProps
 } = props;
 return (
  <StyledInput>
   {label && (
    <label className="label" htmlFor={label}>
     {label}
    </label>
   )}
   <input
    {...otherProps}
    value={value}
    onChange={(e) => onChange?.(e.target.value)}
    id={label}
    type={type}
    name={name}
    className={`input ${className}`}
   />
   {error && (
    <Text
     colorType="error"
     className="error"
     text={error}
    />
   )}
  </StyledInput>
 );
});
const StyledInput = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 position: relative;

 .label {
  margin-bottom: 8px;
  margin-left: 0;
 }
 .input {
  width: 100%;
  background: none;
  padding: 10px 40px 10px 20px;
  border-radius: var(--b-rad-small);
  border: 1px solid var(--text-color);
  outline: none;
  &:focus {
   border: 1px solid var(--accent-color);
  }
 }
 .error {
  position: absolute;
  right: 0;
  bottom: -10px;
 }
`;
