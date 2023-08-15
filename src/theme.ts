import {Colors, extendTheme, type ThemeConfig} from "@chakra-ui/react";

// The theme configuration for Chakra UI's provider.
const config: ThemeConfig =
{
    // Set the color mode to the user's OS color mode.
    initialColorMode: "system",
    useSystemColorMode: false
}

const colors: Colors =
{
    gray: {
        50: "#f9f9f9",
        100: "#ededed",
        200: "#d3d3d3",
        300: "#b3b3b3",
        400: "#a0a0a0",
        500: "#898989",
        600: "#636363",
        700: "#202020",
        800: "#121212",
        900: "#111111"
    }
}

const theme = extendTheme({config, colors});
export default theme;