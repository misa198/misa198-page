import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 150, 136)",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "0.9rem",
        color: "#fff",
        backgroundColor: "#000",
      },
      arrow: {
        color: "#000",
      },
    },
  },
});

export default theme;
