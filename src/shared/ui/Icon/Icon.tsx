import { memo } from "react";
import iconsSprite from "../../assets/icons/iconsSprite.svg";
interface IconProps {
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
  viewBox = "0 0 50 50",
  iconId,
  className,
 } = props;
 return (
  <svg
   width={width}
   height={height}
   viewBox={viewBox}
   fill="none"
   className={className}
  >
   <use xlinkHref={`${iconsSprite}#${iconId}`} />
  </svg>
 );
});
