import { HTMLAttributes, ReactNode, memo } from "react";
import styled from "styled-components";
// type CardType = Omit<
//  HTMLAttributes<HTMLDivElement>,
//  "onClick"
// >;
interface CardProps {
 children?: ReactNode;
 className?: string;
 //  onClick?: (e?: MouseEvent) => void;
}

export const Card = memo((props: CardProps) => {
 const { children, className } = props;
 return (
  <StyledCard
   //  onClick={() => onClick?.()}
   className={className}
  >
   {children}
  </StyledCard>
 );
});
const StyledCard = styled.div<CardProps>`
 background: var(--card-color);
`;
