import React, { useRef, useState } from 'react';
import { storage } from '../../adapters/firebase';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import axios from 'axios';

export const UploadImgGym = ({ setImg, titlePost, bodyPost }) => {
  const [selectFileName, setSelectFileName] = useState('');
  const [imgDb, setImageDb] = useState('')
  console.log(imgDb)
  console.log(titlePost)
  console.log(bodyPost)



  const handleFileChange = (e) => {
    const selectFileName = e.target.files[0];

    if (selectFileName) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileDataURL = event.target.result;
        // Aqui você pode chamar a função para encurtar a URL diretamente ou fazer o que for necessário com fileDataURL
        // Exemplo:
        console.log(selectFileName)
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
    setImg(fileDataURL)
  };

  const fileInput = useRef();
  console.log(selectFileName);

  const handleChange = (event) => {
    event.preventDefault()

    const file = event.target[0]?.files[0]

    if (!file) return console.log('error')

    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

        console.log(progress)
      },
      error => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImageDb(url)

        })
      }
    )

  }

  const newPost = () => {
    axios.post()
  }


  return (


    <form className='upload_img' onSubmit={handleChange}>
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
      <button className='submitButton' type='submit'>Enviar</button>
    </form>


  )
}
