const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: '#fdf6e3',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  chatBubbleSystem: '#2E4C52',
  codeBackground: '#FFF8ED',
};

const darkTheme: Theme = {
  primary: 'rgba(220,120,95,1)',
  text: '#ecc48d',
  textSecondary: '#7fdbca',
  background: '#011627',
  backgroundVariant: '#0b2942',
  border: '#084d81',
  borderLight: '#084d81',
  chatBubbleSystem: '#13344f50',
  codeBackground: '#0b2942',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
