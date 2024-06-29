import DownloadPdf from "../../../components/home/DownloadPdf/DownloadPdf";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const Podcast = () => {
  return (
    <div>
      <SecondaryBanner
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2021/03/a1-1.jpg"
        }
        title={"Opening the Door"}
        text={"Opportunities for U.S. Immigration with attorney Nadine Heitz"}
        mouse={false}
      />
      <DownloadPdf absolute={false} />
    </div>
  );
};

export default Podcast;
