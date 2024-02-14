import { SVGProps, memo } from "react";
import iconsSprite from "../../assets/icons/iconsSprite.svg";
import styled from "styled-components";
interface IconProps extends SVGProps<SVGSVGElement> {
 iconId: string;
 width?: string;
 height?: string;
 viewBox?: string;
 className?: string;
}

export const Icon = memo((props: IconProps) => {
 const {
  width = "50",
  height = "50",
  viewBox = "0 0 120 120",
  iconId,
  className,
 } = props;
 return (
  <StyledSvg
   width={width}
   height={height}
   viewBox={viewBox}
   fill="none"
   className={className}
  >
   <use
    fill="none"
    xlinkHref={`${iconsSprite}#${iconId}`}
   />
  </StyledSvg>
 );
});
const StyledSvg = styled.svg`
`;
