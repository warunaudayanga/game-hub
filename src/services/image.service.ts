export const getCroppedImageUrl = <T>(url?: string): T => {
    if (!url) return url as T;
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return (url.slice(0, index) + "crop/600/400/" + url.slice(index)) as T;
};
