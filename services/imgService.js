import ImgKitService from "../services/imgKitService";
import lqip from "lqip-modern";
import getCacheClient from "../services/cacheClient"

export default class ImgService {
    myCache = null
    key = "allPhotos"
    constructor() {
        this.myCache = getCacheClient();

    }

    async getPhotosFromServer() {
        const imgKitService = new ImgKitService();
        const response = await imgKitService.getAllPhotos();
        let mappedPhotoUrl = [];
        let photos = [];
        photos = response
        .filter(item => item.filePath.split("/").length > 2)
        .map(({ url, height, width, filePath }) => ({
            url,
            height,
            width,
            folder: filePath.split("/")[1],
            orientationHorizontal: height < width
        }));
        const photoWithDataUrl = [];
        for (const photo of photos) {
            const dataUrl = await getDataUrl(photo.url);
            photoWithDataUrl.push({ ...photo, dataUrl });
        }
        mappedPhotoUrl.push(...photoWithDataUrl);
        return mappedPhotoUrl
    }

    async getCachePhotos () { 
        console.log("getWas")
        let photos = this.myCache.get(this.key)
        if (photos === undefined) {
            photos = this.getPhotosFromServer()
            this.myCache.set(this.key, photos, 60*24*30 );
            console.log("getEnter")
        }
        
        return photos
    }

    async clearCache () {
        this.myCache.del(this.key)
    }
}

async function getDataUrl(url) {
  const imgData = await fetch(url);
  const arrayBufferData = await imgData.arrayBuffer();
  const lqipData = await lqip(Buffer.from(arrayBufferData));
  return lqipData.metadata.dataURIBase64;
}
