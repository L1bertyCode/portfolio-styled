import { memo, useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import styled from "styled-components";
import { theme } from "../../../app/styles/Theme";
import { Tab } from "../../../widgets/Projects/ui/Projects";

interface TabMenuProps {
 arrayTabs: Tab[];
 activeTab: Tab;
 onActiveTab: (tab: Tab) => void;
 className?: string;
}

export const TabMenu = (props: TabMenuProps) => {
 const { arrayTabs, activeTab, onActiveTab, className } =
  props;

 return (
  <StyledTabMenu className={className}>
   {arrayTabs.map((arrayTabsItem, i) => (
    <Button
     className="btn"
     key={i}
     isActive={activeTab.status === arrayTabsItem.status}
     onClick={() => {
      onActiveTab(arrayTabsItem);
     }}
    >
     {arrayTabsItem.title}
    </Button>
   ))}
  </StyledTabMenu>
 );
};
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
