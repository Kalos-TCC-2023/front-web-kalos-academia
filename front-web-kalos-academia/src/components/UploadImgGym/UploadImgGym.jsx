import React, { useRef, useState } from 'react'

export const UploadImgGym = ({ setImg }) => {

  const [selectFileName, setSelectFileName] = useState('')

  const handleFileChange = (e) => {
    const selectFileName = e.target.files[0];

    if (selectFileName) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileDataURL = event.target.result;
        setImg(fileDataURL)
      };

      reader.readAsDataURL(selectFileName);
    }
  }

  const fileInput = useRef()


  return (
    <div className="container-change-file">
    <div className="change-file" onClick={() => fileInput.click()}>
      <p>Escolher arquivos</p>
    </div>
    <div className="changed-file">
      <p>{selectFileName ? selectFileName.name : 'Nenhum arquivo escolhido'}</p>
    </div>
    <input
      type="file"
      style={{ display: 'none' }}
      ref={fileInput}
      onChange={handleFileChange}
    />
  </div>
  )
}