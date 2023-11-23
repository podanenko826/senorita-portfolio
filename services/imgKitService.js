import ImageKit from "imagekit";

export default class ImgKitService {
  instance = null;
  constructor() {
    this.instance = new ImageKit({
      publicKey: "public_0zggMsR/XC8XvBXTdGe1u7ah460=",
      privateKey: "private_C+5Ub73pJnURhsfWNxkhf6S4+pM=",
      urlEndpoint: "https://ik.imagekit.io/1xi77idekq"
    });
  }
  getAllPhotos() {
    return new Promise((resolve, reject) => {
      this.instance.listFiles(
        {
          // skip: 10,
          // limit: 10
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
    });
  }
}
