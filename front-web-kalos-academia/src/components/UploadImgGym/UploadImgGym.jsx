import React, { useRef, useState } from 'react';

export const UploadImgGym = () => {
  const [selectFileName, setSelectFileName] = useState('');


  const handleFileChange = (e) => {
    const selectFileName = e.target.files[0];

    if (selectFileName) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileDataURL = event.target.result;
        // Aqui você pode chamar a função para encurtar a URL diretamente ou fazer o que for necessário com fileDataURL
        // Exemplo:
        shortenURL(fileDataURL);
        setSelectFileName(selectFileName.name);
      };

      reader.readAsDataURL(selectFileName);
    }
  };

  const shortenURL = (fileDataURL) => {
    // Lógica para encurtar a URL aqui
    // Em vez de usar 'this.setState', você usa 'setSelectedFileWorkout' para atualizar o estado
    setSelectFileName(fileDataURL);
  };

  const fileInput = useRef();
  console.log(selectFileName);


  return (
    <div className="container-change-file">

      <div className="change-file" onClick={() => fileInput.current.click()}>
        <p>Escolher arquivos</p>
      </div>
      <div className="changed-file">
        <p>{selectFileName ? selectFileName : 'Nenhum arquivo escolhido'}</p>
      </div>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInput}
        onChange={handleFileChange}
      />

    </div>
  );
};
