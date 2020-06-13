import React, { useCallback } from "react"

const InputImageFile = ({setImageName, setImageUrl}) => {

    const onChangeHandler = useCallback((e) => {
        const reader = new FileReader();
        const fileName = e.target.files[0]?.name?.split(".")[0] + "_sub.jpg";
    
        setImageName(fileName);
    
        reader.onloadend = (e) => setImageUrl(e.target.result);
        reader.readAsDataURL(e.target.files[0]);
      }, [setImageName, setImageUrl]);

    return (
        <input type="file" accept="image/*" onChange={onChangeHandler} />
    )
}

export default InputImageFile;