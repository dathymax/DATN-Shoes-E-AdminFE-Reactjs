import { Button } from 'antd';
import React, { FC, useEffect, useRef } from 'react'
import { BsUpload } from 'react-icons/bs';
import { useAppDispatch } from '../../store/store';
import { ImageApis } from '../../apis/image';
import { addFile, removeAllFile, removeFileById } from '../../store/features/file';
import { UPLOAD_URL } from '../../constant';
import "./index.css"
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';

interface UploadProps {
    fileId?: string
    fileName?: string
}

const Upload: FC<UploadProps> = ({ fileId, fileName }) => {
    const dispatch = useAppDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);

            ImageApis.createImage(formData).then(response => {
                dispatch(addFile(response));
            }).catch(() => { })
        }
    };

    const handleRemoveFile = () => {
        ImageApis.deleteImage(fileId).then(() => {
            dispatch(removeFileById({ fileId }));
        }).catch(() => { })
    }

    useEffect(() => {
        return () => {
            dispatch(removeAllFile())
        };
    }, [])

    return (
        fileName
            ? <div className='upload_preview w-full h-[200px]'>
                <img src={`${UPLOAD_URL}/${fileName}`} alt="File" className='w-full h-full rounded-lg' />

                <div className="upload__actions flex items-center justify-center gap-4">
                    {/* <AiOutlineEye className="text-[30px]" /> */}
                    <AiOutlineDelete
                        className="text-[30px]"
                        onClick={handleRemoveFile}
                    />
                </div>
            </div>
            : <div className='border-dashed border-gray-300 bg-gray-100 rounded-lg p-4 flex items-center justify-center flex-col gap-3 w-full h-[200px]'>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                />
                <BsUpload className="text-[30px]" />
                <Button
                    type='primary'
                    onClick={() => fileInputRef.current?.click()}
                >
                    Add image
                </Button>
            </div>
    )
}

export default Upload