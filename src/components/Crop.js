import React, { useState, useContext } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import source from '../assets/images/dog_bg.jpeg'
import AppContext from '../helper/context';

const Crop = () => {
  const [crop, setCrop] = useState({
    unit: '%',
    width: 30,
  });
  const [imageRef, setImageRef] = useState("")
  const { src, setSrc, cropEnable } = useContext(AppContext);

  const onImageLoaded = image => {
    setImageRef(image);
  };

  const onCropComplete = crop => {
    makeClientCrop(crop);
  };

  const onCropChange = (crop, percentCrop) => {
    if (cropEnable) setCrop(crop)
  };

  async function makeClientCrop (crop) {
    if (cropEnable && imageRef && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef,
        crop,
        'newFile.jpeg'
      );
      setSrc([...src, croppedImageUrl]);
    }
  }

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        let fileUrl = ""
        window.URL.revokeObjectURL(fileUrl);
        fileUrl = window.URL.createObjectURL(blob);
        resolve(fileUrl);
      }, 'image/jpeg');
    });
  }
  return (
    <ReactCrop
      src={source}
      crop={crop}
      onImageLoaded={onImageLoaded}
      onComplete={onCropComplete}
      onChange={onCropChange}
    />
  )
}

export default Crop;