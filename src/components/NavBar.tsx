import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/Nu.png";

const NavBar = () =>
{
    return (
        <HStack>
            <Image boxSize="80px" src={logo}/>
            <Text color="white">NavBar</Text>
        </HStack>
    )
}

export default NavBar;