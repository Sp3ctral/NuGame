import useGenres, {Genre} from "../hooks/UseGenres";
import {Button, Heading, HStack, Image, List, ListItem, Skeleton} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props
{
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) =>
{
    // Keep the loading state instead we change our mind to not use static data and fetch from the server
    const {data, isLoading} = useGenres();

    return(
        <>
            <Heading color="red.400" fontSize="28px" fontWeight="200">Genres</Heading>
            {/* We don't need to use ternary rendering here since the genre list will be browser-cached. */}
            {isLoading && <Skeleton height="100%" borderRadius={5} isLoaded={!isLoading} fadeDuration={1} />}
            <List>
                {
                    //@ts-ignore
                    data.map((genre:Genre) =>
                        <ListItem key={genre.id} paddingY={2}>
                            <HStack>
                                <Image boxSize="38px" objectFit="cover" borderRadius={8}
                                       src={getCroppedImageUrl(genre.image_background)}/>
                                <Button background={selectedGenre?.id == genre.id ? "blue.800" : "none"}
                                        onClick={() => onSelectGenre(genre)} padding={2} colorScheme="blue"
                                        borderRadius={15} height="auto" whiteSpace="normal" textAlign="left"
                                        fontSize="lg" variant="ghost">{genre.name}</Button>
                            </HStack>
                        </ListItem>)}
            </List>
        </>
    )
}

export default GenreList;