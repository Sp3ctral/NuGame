// Service to crop a given image via an API.
// Find a better/more efficient way to do this. Maybe a free CDN.

import placeHolder from "../assets/placeholder.webp";

const getCroppedImageUrl = (url: string) =>
{
    if (!url) return placeHolder;

    return url.replace(/(\/media\/)/, "$1crop/600/400/");
}

export default getCroppedImageUrl;
