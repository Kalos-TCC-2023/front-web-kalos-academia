import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd';
import './UploadImage.css'
import { storage } from '../../adapters/firebase';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';


export const UploadImage = ({ fileList, imageDb, setImageDb }) => {

    const [imgUrl, setImgUrl] = useState('')
    const [progress, setProgress] = useState(0)

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
                setProgress(progress)
                // console.log(progress)
            },
            error => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgUrl(url)
                    setImageDb(url)
                })
            }
        )

    }

    return (

        <div className='container_icon'>
            <div className="img_icon">
                {imageDb && <img src={imageDb} height={100} className='img_upload' />}
            </div>

            <form className='upload_img' onSubmit={handleChange}>
                <div className="data_img_upload">
                    <div style={{ width: 195 }}>
                    {/* <Progress percent={progress} steps={5} /> */}
                        <Progress percent={progress} size="small" />
                    </div>
                    <div className="input_file_style">
                        <label className='label_img' htmlFor="arquivo">Escolher arquivo</label>
                        <input name='arquivo' type='file' id='arquivo' />
                    </div>
                    <button className='submitButton' type='submit'>Enviar</button>
                </div>

            </form>
            <br />
        </div>
    )
}
