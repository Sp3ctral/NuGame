// NavBar component that contains the navbar and logo.

import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/Nu.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props
{
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) =>
{
    return (
        <HStack marginBottom={8}>
            <Image draggable="false" boxSize="80px" src={logo} />
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;