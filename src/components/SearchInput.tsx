import {Button, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props
{
    onSearch: (searchText: string) => void;
}


const SearchInput = ({onSearch}: Props) =>
{
    const ref = useRef<HTMLInputElement>(null);
    const button = <Button onClick={() => handleClick()} variant="solid" borderRadius={20} size="sm">CLEAR</Button>

    // Handle the click of the search box clear button
    const handleClick = () =>
    {
        if (ref.current!.value)
        {
            // Simulate a return to the home page. This consumed an API call.
            // TODO: Implement home page caching and reload cache on click to reduce unnecessary API calls.
            onSearch("");

            // Clear the input field visually. Everything is done with the API so data value is not a big concern.
            ref.current!.value = "";
        }
    }

    return(
        // When a user clicks RETURN, submit and preserve their input in the field.
        <form onSubmit={(event) =>
        {
            event.preventDefault();
            if (ref.current) {onSearch(ref.current.value)}
        }} >
            <InputGroup>
                <Input focusBorderColor="crimson" isRequired={true} ref={ref} borderRadius={20}
                       placeholder="Search games..." variant="filled" />
                <InputLeftElement children={<BsSearch size={20} />} />
                <InputRightElement w="5rem" children={button} />
            </InputGroup>
        </form>
    )
}

export default SearchInput;