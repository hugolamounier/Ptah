interface Theme {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  textColor: string;
}
export const darkTheme: Theme = {
  100: '#ccd0d4',
  200: '#b3b9bf',
  300: '#99a1a9',
  400: '#808a94',
  500: '#66737f',
  600: '#4d5b69',
  700: '#334454',
  800: '#1a2c3e',
  900: '#001529',
  textColor: '#ffffff',
};

export const lightTheme: Theme = {
  100: '#ccd0d4',
  200: '#b3b9bf',
  300: '#99a1a9',
  400: '#808a94',
  500: '#66737f',
  600: '#4d5b69',
  700: '#334454',
  800: '#1a2c3e',
  900: '#001529',
  textColor: '#000000',
};

export const getCurrentTheme = (): 'light' | 'dark' => {
  return localStorage.theme ?? 'dark';
};
