import { BsChevronDown } from 'react-icons/bs';
import {Box, Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";

interface Props {
    onSelectSortOption: (sortOption: string) => void;
    sortOrder: string;
}


const SortSelector = ({onSelectSortOption, sortOrder}: Props) =>
{
    const sortPriority = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"}
    ]

    const selectedSortOption = sortPriority.find(option => option.value === sortOrder);

    return(
        // Render the platform selector if there isn't any error...
        <Box>
            <Menu isLazy={true}>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Order By: {selectedSortOption?.label || "Relevance"}
                </MenuButton>
                <MenuList>
                    {sortPriority.map(option =>
                        <MenuItem onClick={() => onSelectSortOption(option.value)} key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>)}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default SortSelector;