import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button, Input } from 'antd';
import './UploadImage.css'
import { storage } from '../../adapters/firebase';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';


export const UploadImage = ({ fileList, setFileList, imageDb, setImageDb, updateFielHandler }) => {

    const [imgUrl, setImgUrl] = useState('')

    const handleChange = (event) => {
        event.preventDefault()

        const file = event.target[0]?.files[0]
        console.log(file)
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
                    setImgUrl(url)
                    setImageDb(url)
                })
            }
        )

    }

    console.log(imgUrl)
    console.log(fileList)
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );


    return (

        <div className='container_icon'>




            {/* <div className="upload_icon">
                <Upload style={'width: 100%; height: 100%;'}
                    listType="picture-circle"
                    fileList={fileList}

                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>

                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                        alt="example"
                        style={{
                            width: '100%',
                        }}
                        src={imageDb}
                    />
                </Modal>
            </div> */}
            {imageDb && <img src={imageDb} height={100} className='img_upload' />}
            <form onSubmit={handleChange}>
                <input type='file' />
                <button type='submit'>Enviar</button>
            </form>
            <br />
            

        </div>
    )
}
