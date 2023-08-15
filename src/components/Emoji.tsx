import {Heading} from "@chakra-ui/react";

interface Props
{
    rating: number | null;
}

const Emoji = ({rating}: Props) =>
{
    const ratingMap: {[key:number]: string} =
        {
            1: "🗑️",
            2: "🙁",
            3: "🫤",
            4: "😄",
            5: "🤩"
        }

    return(
        rating && <Heading fontSize="24px">{ratingMap[rating]}</Heading>
    )
}

export default Emoji;