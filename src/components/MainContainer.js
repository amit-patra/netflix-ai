import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";

const MainContainer = () => {
const movieList = useSelector(store=> store?.movies?.nowPlayingVideoList);
    if(!movieList) return;
    // console.log(movieList[0]);
    const { title, overview, id} = movieList[1];
  return (
  <div className="">
    <VideoTitle title={title} overview={overview}/>
    <BackgroundVideo videoId={id}/>
  </div>
  )
}

export default MainContainer;
