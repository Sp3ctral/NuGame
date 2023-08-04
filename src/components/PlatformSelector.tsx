import {Box, Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../hooks/useGames";

interface Props
{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({selectedPlatform, onSelectPlatform}: Props) =>
{
    const {data, error} = usePlatforms();

    return(
        // Render the platform selector if there isn't any error...
        !error &&
        <Box>
            <Menu isLazy={true}>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {selectedPlatform?.name || "All Platforms"}
                </MenuButton>
                <MenuList>
                    {/* Map each platform to a menu option in the menu selector. */}
                    {
                        data.map((platform: Platform) =>
                            <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
                                {platform.name}
                            </MenuItem>)
                    }
                </MenuList>
            </Menu>
        </Box>
    )
}

export default PlatformSelector;