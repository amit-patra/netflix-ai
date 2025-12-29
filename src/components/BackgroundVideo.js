import { useSelector } from "react-redux";
import {useBackgroundVideo} from "../hooks/useBackgroundVideo";

const BackgroundVideo = ({ videoId }) => {
  useBackgroundVideo(videoId);
  const backgroundVideos = useSelector(
    (store) => store?.movies?.backgroundVides
  );
  if (!backgroundVideos) return;
  let filterVideo = backgroundVideos?.filter((item) => item.type === "Trailer");
  // console.log(filterVideo);
  filterVideo = filterVideo.length > 0 ? filterVideo[1] : filterVideo;
  const videoSrcUrl = `https://www.youtube.com/embed/${filterVideo.key}?autoplay=1&mute=1&controls=0&rel=0&loop=1`
  // const videoSrcUrl = `https://www.youtube.com/embed/3f3mdckpm_A?autoplay=1&mute=1&controls=0&rel=0`
  return (
    <div className="elative w-full h-screen overflow-hidden">
      <iframe
          className="w-screen aspect-video overflow-hidden"
          src={videoSrcUrl}
          title="YouTube video player"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
