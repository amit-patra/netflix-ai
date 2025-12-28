import { useSelector } from "react-redux";
import { useBackgroundVideo } from "../hooks/useBackgroundVideo";

const BackgroundVideo = ({ videoId }) => {
  useBackgroundVideo(videoId);
  const backgroundVideos = useSelector(
    (store) => store?.movies?.BackgroundVides
  );
  if (!backgroundVideos) return;
  let filterVideo = backgroundVideos?.filter((item) => item.type === "Trailer");
  filterVideo = filterVideo.length > 0 ? filterVideo[0] : filterVideo;
  const videoSrcUrl = `https://www.youtube.com/embed/${filterVideo.key}`
  return (
    <div className="">
      <iframe
         width="560"
          height="315"
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
