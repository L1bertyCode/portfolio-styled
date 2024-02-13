import { ReactNode } from "react";

interface ModalProps {
 children?: ReactNode;
 className?: string;
}

export const Modal = (props: ModalProps) => {
 const { children, className } = props;
 return <div className={className}>{children}</div>;
};
