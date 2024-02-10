import { memo } from "react";

interface SliderProps {
 className?: string;
}

export const Slider = memo((props: SliderProps) => {
 const { className } = props;
 return <div className={className}></div>;
});
