import Typography from 'typography';
import { injectGlobal } from 'emotion';
import 'normalize.css';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['400', '800'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['300'],
    },
  ],
  bodyFontFamily: ['Raleway', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
});

injectGlobal`
  body {
    background-color: #f3f3f3;
  }
`;

export default typography;
