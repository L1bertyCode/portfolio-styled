import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
 *,::before,::after {
  margin: 0 auto;padding: 0;box-sizing:border-box
}

input,
button,
textarea,
select {
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  font-style: inherit;
}

  body {
  background:var(--background-color);
  color:var(--text-color);
  font:var(--font-m);
  }
  
`;
