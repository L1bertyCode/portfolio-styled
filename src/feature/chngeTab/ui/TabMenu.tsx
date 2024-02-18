import { memo, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import styled from "styled-components";
import { theme } from "../../../app/styles/Theme";

interface TabMenuProps {
 className?: string;
}
const arrayTabs = [
 "All",
 "React JS",
 "React Native",
 "Vue",
];
export const TabMenu = memo((props: TabMenuProps) => {
 const { className } = props;
 const [activeTab, setActiveTab] =
  useState<(typeof arrayTabs)[keyof typeof arrayTabs]>(
   "All"
  );
 return (
  <StyledTabMenu className={className}>
   {arrayTabs.map((arrayTabsItem, i) => (
    <Button
     className="btn"
     key={i}
     isActive={activeTab === arrayTabsItem}
     onClick={() => setActiveTab(arrayTabsItem)}
    >
     {arrayTabsItem}
    </Button>
   ))}
  </StyledTabMenu>
 );
});
const StyledTabMenu = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
 gap: var(--indent-20);
 .btn {
  margin-bottom: var(--indent-8);
  &:last-child {
   margin-right: 0;
  }
 }
 @media ${theme.media.mobile} {
  gap: 4px;
 }
`;
