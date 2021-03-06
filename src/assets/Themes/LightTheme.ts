import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "@material-ui/lab/themeAugmentation";

const LightTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#FFFFFF",
		},

		secondary: {
			main: "#F94400",
			contrastText: "#FFFFFF",
		},
	},
});

export default LightTheme;
