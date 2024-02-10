import { TextareaHTMLAttributes, memo } from "react";
import styled from "styled-components";

interface TextareaProps
 extends TextareaHTMLAttributes<HTMLTextAreaElement> {
 className?: string;
 error?: string;
 label?: string;
}

export const Textarea = memo((props: TextareaProps) => {
 const { error, label, className, ...otherProps } = props;

 return (
  <StyledTextarea>
   {label && (
    <label className="label" htmlFor={label}>
     {label}
    </label>
   )}
   <textarea
    {...otherProps}
    className={`${className} textarea`}
    name=""
    id=""
   ></textarea>
  </StyledTextarea>
 );
});
export const StyledTextarea = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 position: relative;
 .label {
  margin-bottom: 8px;
  margin-left: 0;
 }
 .textarea {
  resize: none;
  width: 100%;
  background: none;
  padding: 10px 20px;
  border-radius: var(--b-rad-small);
  border: 1px solid var(--text-color);
  outline: none;
  &:focus {
   border: 1px solid var(--accent-color);
  }
 }
`;
