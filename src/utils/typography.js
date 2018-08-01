import Typography from 'typography';

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

export default typography;
