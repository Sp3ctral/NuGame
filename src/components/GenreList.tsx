import useGenres, {Genre} from "../hooks/UseGenres";
import {Button, HStack, Image, List, ListItem, Skeleton} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props
{
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) =>
{
    const {data, isLoading} = useGenres();

    return(
        <>
            {/* We don't need to use ternary rendering here since the genre list will be browser-cached. */}
            {isLoading && <Skeleton height="100%" borderRadius={5} isLoaded={!isLoading} fadeDuration={1} />}
            <List>
                {
                    data.map(genre =>
                        <ListItem key={genre.id} paddingY={2}>
                            <HStack>
                                <Image boxSize="38px" fit="cover" borderRadius={8}
                                       src={getCroppedImageUrl(genre.image_background)}/>
                                <Button onClick={() => onSelectGenre(genre)} padding={2} colorScheme="blue" borderRadius={15}
                                        height="auto" whiteSpace="normal" textAlign="left" fontSize="lg"
                                        variant="ghost">{genre.name}</Button>
                            </HStack>
                        </ListItem>)}
            </List>
        </>
    )
}

export default GenreList;