import React, { useRef, useState } from 'react'
import { storage } from '../../adapters/firebase'
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage'
import axios from 'axios'
import './UploadImgGym.css'
import { message } from 'antd';


export const UploadImgGym = ({ setImg, titlePost, bodyPost }) => {
  const [selectFileName, setSelectFileName] = useState('');
  const [imgDb, setImageDb] = useState(null)
  const [messageApi, contextHolder] = message.useMessage();

  console.log(imgDb)
  console.log(titlePost)
  console.log(bodyPost)

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Post realizado!',
    })
  }

  const errorForget = () => {
    messageApi.open({
      type: 'warning',
      content: 'Parece que você esqueceu de colocar um titulo ou/e um corpo para seu post!',
    });
  };

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

    const nullImg = null

    if (!file) {
      newPost(nullImg)
    } else {
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
            newPost(url)
          })
        }
      )
    }



  }

  const id = localStorage.getItem("id_academia")


  const newPost = (img) => {
    if (titlePost == '' || bodyPost == '') {
      errorForget()
    } else {
      axios.post('https://kaloscorp.cyclic.app/kalos/postagem', {
        titulo: titlePost,
        corpo: bodyPost,
        anexo: img,
        id_academia: id
      }).then(({ data }) => {
        setImageDb(null)
        console.log(data)
        success()
      }).catch(({ error }) => {
        console.log(error)

      })
    }

  }


  return (


    <form className='upload_img' onSubmit={handleChange}>
      {contextHolder}
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
      <button className='submitButton_gym' type='submit'>Postar</button>
    </form>


  )
}
