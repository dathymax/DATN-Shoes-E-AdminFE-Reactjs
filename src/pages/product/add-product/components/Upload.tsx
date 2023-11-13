import Upload from '../../../../components/upload';
import { useAppSelector } from '../../../../store/store';

const ProductUploadImage = () => {
    const images = useAppSelector(state => state.file.images);

    return (
        <div className="grid grid-cols-3 gap-20">
            <div className="col-span-1">
                <p className="mb-2 font-medium">
                    Photo Product
                </p>
                <p className="text-gray-400 text-[13px]">
                    Recommended minimum width 1080px X 1080px, with a max size of 5MB, only *.png, *.jpg and *.jpeg image files are accepted
                </p>
            </div>
            <div className="col-span-2 grid grid-cols-4 gap-7 text-gray-400">
                <div className="col-span-1">
                    <Upload
                        fileId={images[0]?._id}
                        fileName={images[0]?.fileName}
                    />
                </div>
                <div className="col-span-1">
                    <Upload
                        fileId={images[1]?._id}
                        fileName={images[1]?.fileName}
                    />
                </div>
                <div className="col-span-1">
                    <Upload
                        fileId={images[2]?._id}
                        fileName={images[2]?.fileName}
                    />
                </div>
                <div className="col-span-1">
                    <Upload
                        fileId={images[3]?._id}
                        fileName={images[3]?.fileName}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductUploadImage