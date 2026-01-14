import { useEffect } from "react"
import { API_OPTIONS, POPULAR_VIDEO_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideo } from "../utils/movieSlice";

export const usePopulareVideo=()=>{
    const popularVideos = useSelector(store => store?.movies?.popularVideos)
    const dispatch = useDispatch();
    const getPopulartVideo = async()=>{
        const data = await fetch(POPULAR_VIDEO_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularVideo(json.results))
    }
    useEffect(()=>{
        !popularVideos && getPopulartVideo()
    }, [])
}