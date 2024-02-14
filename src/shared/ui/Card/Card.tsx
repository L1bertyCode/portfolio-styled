import { ReactNode, memo } from "react";
import styled from "styled-components";

interface CardProps {
 children?: ReactNode;
 className?: string;
}

export const Card = memo((props: CardProps) => {
 const { children, className } = props;
 return (
  <StyledCard className={className}>{children}</StyledCard>
 );
});
const StyledCard = styled.div`
 background: var(--card-color);
`;
