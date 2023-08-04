// NavBar component that contains the navbar and logo.

import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/Nu.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () =>
{
    return (
        <HStack marginBottom={8}>
            <Image draggable="false" boxSize="80px" src={logo}/>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;