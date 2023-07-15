import { BsChevronDown } from 'react-icons/bs';
import {Box, Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";

const SortSelector = () =>
{

    return(
        // Render the platform selector if there isn't any error...
        <Box>
            <Menu isLazy={true}>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Order By: Relevance
                </MenuButton>
                <MenuList>
                    <MenuItem>Relevance</MenuItem>
                    <MenuItem>Date</MenuItem>
                    <MenuItem>Name</MenuItem>
                    <MenuItem>Release Date</MenuItem>
                    <MenuItem>Popularity</MenuItem>
                    <MenuItem>Average Rating</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default SortSelector;