import { ReactNode, memo } from "react";
import cn from "classnames";
import s from "./MainLayout.module.css";

interface MainLayoutProps {
 header: ReactNode;
 content: ReactNode;
 footer?: ReactNode;
}

interface MainLayoutProps {
 className?: string;
}

export const MainLayout = memo((props: MainLayoutProps) => {
 const { header, content, footer, className } = props;

 return (
  <div className={cn(s.mainLayout, {}, [className])}>
   <div className={s.header}>{header}</div>
   <div className={s.content}>{content}</div>
   {footer && <div className={s.footer}>{footer}</div>}
  </div>
 );
});
