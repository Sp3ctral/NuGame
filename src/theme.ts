import {extendTheme, type ThemeConfig} from "@chakra-ui/react";

// The theme configuration for Chakra UI's provider.
const config: ThemeConfig =
{
    // Set the color mode to the user's OS color mode.
    initialColorMode: "system"
}

const theme = extendTheme({config});
export default theme;