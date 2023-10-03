import { Button } from 'antd';
import React, { FC, useEffect, useRef } from 'react'
import { BsUpload } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ImageApis } from '../../apis/image';
import { addFile, removeAllFile } from '../../store/features/file';
import { UPLOAD_URL } from '../../constant';

interface UploadProps {
    filePath?: string
}

const Upload: FC<UploadProps> = ({ filePath }) => {
    const dispatch = useAppDispatch();
    const images = useAppSelector(state => state.file.images);
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

    useEffect(() => {
        return () => {
            dispatch(removeAllFile())
        };
    }, [])

    return (
        filePath
            ? <img src={`${UPLOAD_URL}/${filePath}`} alt="File" className='w-full h-[200px]' />
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