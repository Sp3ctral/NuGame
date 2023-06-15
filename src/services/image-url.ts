// Service to crop a given image via an API.
// Find a better/more efficient way to do this. Maybe a free CDN.

const getCroppedImageUrl = (url: string) =>
{
    return url.replace(/(\/media\/)/, "$1crop/600/400/");
}

export default getCroppedImageUrl;
