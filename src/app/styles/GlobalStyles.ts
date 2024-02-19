import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
 *,::before,::after {
  margin: 0;
  padding: 0;
  box-sizing:border-box
}
body {
  width: 100%;
  min-width:320px;
  background:var(--background-color);
  color:var(--text-color);
  font:var(--font-m);
}
.app {
  width: 100%;

}
a {
    text-decoration: none;
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
`;
