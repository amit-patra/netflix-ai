import { useSelector } from "react-redux";

const VideoTitle = ({title, overview})=>{
    return (
        <div className="">
            <h1 className="font-bold text-2xl">{title}</h1>
            <h1 className="w-1/4">{overview}</h1>
            <button className="p-2 bg-red-500 font-bold rounded-md text-white mr-1">▶️ Play</button>
            <button className="p-2 bg-green-500 font-bold rounded-md text-white">ℹ️ More info</button>
        </div>
    )
}

export default VideoTitle;