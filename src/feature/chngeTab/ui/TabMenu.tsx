import { memo } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import styled from "styled-components";

interface TabMenuProps {
 className?: string;
}
const array = [
 { name: "All", isActive: true },
 { name: "React JS", isActive: false },
 { name: "React Native", isActive: false },
 { name: "Vue", isActive: false },
];
export const TabMenu = memo((props: TabMenuProps) => {
 const { className } = props;
 return (
  <StyledTabMenu className={className}>
   {array.map((arrayItem, i) => (
    <Button
     className="btn"
     key={i}
     isActive={arrayItem.isActive}
    >
     {arrayItem.name}
    </Button>
   ))}
  </StyledTabMenu>
 );
});
const StyledTabMenu = styled.div`
 .btn {
  margin-right: var(--indent-m);
  &:last-child {
   margin-right: 0;
  }
 }
`;
