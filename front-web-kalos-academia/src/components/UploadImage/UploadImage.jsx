import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload, Button } from 'antd';
import './UploadImage.css'
import { storage } from '../../adapters/firebase';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';


export const UploadImage = ({ fileList, setFileList, imageDb, setImageDb, updateFielHandler }) => {

    const [imgUrl, setImgUrl] = useState('')

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            console.log('header', reader)
            reader.onerror = (error) => reject(error);
        })

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');


    const handleCancel = () => setPreviewOpen(false)
    const handlePreview = async (file) => {

        if (!file.url && !file.preview) {
            console.log(file)
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }

    const handleChange = ({ fileList }) => {
        setFileList(fileList)
        if (fileList[0] === undefined) {
            return
        } else {

            if (!fileList) return
            fileList[0].status = 'done'
            const file = fileList[0]
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
            <div className="upload_icon">
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
            </div>

            {/* <Button onClick={handleChange} type="primary" shape="round" size='small'></Button> */}

        </div>
    )
}
