import { ImgHTMLAttributes, memo } from "react";
import styled from "styled-components";

interface ImageProps
 extends ImgHTMLAttributes<HTMLImageElement> {
 src: string;
 alt: string;
 className?: string;
}

export const Image = memo((props: ImageProps) => {
 const { src, alt = "image", className } = props;

 return (
  <StyledImage src={src} alt={alt} className={className} />
 );
});
const StyledImage = styled.img`
 width: 100%;

`;
