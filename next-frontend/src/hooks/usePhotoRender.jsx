import { useState } from "react";
const usePhotoRender = () => {
  const [photoUrl, setPhotoUrl] = useState();
  const handlePhotoRender = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      let url = e.target.result;
      setPhotoUrl(url);
    };
    reader.readAsDataURL(file);
  };
  return [photoUrl,setPhotoUrl, handlePhotoRender];
};
export default usePhotoRender;
