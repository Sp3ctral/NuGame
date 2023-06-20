import useGenres from "../hooks/UseGenres";
import {HStack, Image, List, ListItem, Skeleton, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () =>
{
    const {data, isLoading} = useGenres();

    return(
        <>
            {isLoading && <Skeleton height="100%" borderRadius={5} isLoaded={!isLoading} fadeDuration={1} />}
            <List>
                {
                    data.map(genre =>
                        <ListItem key={genre.id} paddingY={2}>
                            <HStack>
                                <Image boxSize="38px" fit="cover" borderRadius={8}
                                       src={getCroppedImageUrl(genre.image_background)}/>
                                <Text fontSize="lg">{genre.name}</Text>
                            </HStack>
                        </ListItem>)}
            </List>
        </>
    )
}

export default GenreList;