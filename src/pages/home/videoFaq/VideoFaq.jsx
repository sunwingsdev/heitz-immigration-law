import DownloadPdf from "../../../components/home/DownloadPdf/DownloadPdf";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const VideoFaq = () => {
  return (
    <div>
      <SecondaryBanner
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/e1.jpg"
        }
        title={"Video FAQ"}
        text={"You have questions? We have answers for you."}
        mouse={false}
      />
      <DownloadPdf />
    </div>
  );
};

export default VideoFaq;
