import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          fontFamily: "Roboto",
          fontSize: 42,
          color: "#ef4056",
          marginBottom: 16,
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    button: {
      textTransform: "none",
    },
    allVariants: {
      cursor: "default",
      fontSize: 20,
      fontWeight: 300,
      color: "#241f55",
      lineHeight: 1.55,
    },
    body1: {
      fontSize: 14,
      marginTop: 4,
    },
    body2: {
      fontSize: 12,
    },
    h1:
    {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 65,
      color: "#fff",
    },
    h2:
    {
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 14,
      color: "#fff",
    },
    h3: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 65,
      color: "#1B2753",
    },
    h4: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 52,
      color: "#ef4056",
    },
    h5: {
      color: "#1B2753",
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 16,
    },
    h6: {
      color: "#1B2753",
      fontFamily: "Roboto",
      fontWeight: 300,
      fontSize: 16,
    },

    subtitle1: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#241f55",
      fontWeight: 300,
      lineHeight: 1.55,
      marginTop: 12,
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: 14,
      color: "#666666",
      fontWeight: 300,
      lineHeight: 1.55,
      marginBottom: 80,
    },
    subtitle3: {
      fontFamily: "Roboto",
      fontSize: 24,
      color: "#241f55",
      fontWeight: 300,
      lineHeight: 1.55,
      paddingTop: 41,
      width: '50%',
    },
    title: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 36,
      color: "#ef4056",
      textAlign: 'center',
    },
    subtitle4: {
      fontFamily: "Roboto",
      fontSize: 16,
      color: "#241f55",
      fontWeight: 300,
      lineHeight: 1.55,
      padding: "10 20",
      width: '50%',
    },
    card_header: {
      fontFamily: "Roboto",
      fontWeight: 600,
      fontSize: 16,
      color: "#ef4056",
    },
  },
});

export default theme;