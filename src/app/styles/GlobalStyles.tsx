import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
 *,::before,::after {
  margin: 0 auto;padding: 0;box-sizing:border-box
}
  body {
  background:var(--background-color)
  }
  color:var(--text-color)
`;
