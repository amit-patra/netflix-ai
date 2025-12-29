import { useEffect } from "react"
import { API_OPTIONS, POPULAR_VIDEO_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularVideo } from "../utils/movieSlice";

export const usePopulareVideo=()=>{
    const dispatch = useDispatch();
    const getPopulartVideo = async()=>{
        const data = await fetch(POPULAR_VIDEO_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularVideo(json.results))
    }
    useEffect(()=>{
        getPopulartVideo()
    }, [])
}