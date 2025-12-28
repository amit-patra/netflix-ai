import { useSelector } from "react-redux";

const VideoTitle = ({title, overview})=>{
    return (
        <div className="absolute h-screen mt-[65px] pt-[20%] pl-20 bg-gradient-to-r from-[#00000061]">
            <h1 className="font-bold text-3xl text-white mb-4">{title}</h1>
            <h1 className="w-1/5 text-white mb-4">{overview}</h1>
            <button className="p-2 w-40 bg-white font-bold rounded-md text-black mr-4 hover:opacity-80 cursor-pointer">▶ Play</button>
            <button className="p-2 bg-gray-500 font-bold rounded-md text-white w-40 cursor-pointer hover:opacity-50">More info</button>
        </div>
    )
}

export default VideoTitle;