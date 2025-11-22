export const theme = {
  colors: {
    primary: "hsl(222.2 47.4% 11.2%)",
    secondary: "hsl(210 40% 96.1%)",
    accent: "hsl(210 40% 96.1%)",
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
  },
};

export type Theme = typeof theme;
