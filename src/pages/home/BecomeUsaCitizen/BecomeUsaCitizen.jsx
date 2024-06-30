import DownloadPdf from "../../../components/home/DownloadPdf/DownloadPdf";
import Faq from "../../../components/home/Faq/Faq";
import GreenCardHolder from "../../../components/home/GreenCardHolder/GreenCardHolder";
import BookingImmigration from "../../../components/shared/BookingImmigration";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const BecomeUsaCitizen = () => {
  return (
    <div>
      <SecondaryBanner
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2020/08/f4.jpg"
        }
        title={"Become a Naturalized U.S. Citizen"}
        text={"Citizenship grants you new rights and new opportunities"}
        mouse={false}
      />
      <BookingImmigration
        title={"It All Starts With A Consultation"}
        details={
          "Use our online booking tool to schedule your immigration consultation. All completely secure and confidential. If there is a path to a green card, let us help you get there!"
        }
      />
      <GreenCardHolder />
      <Faq />
      <DownloadPdf />
    </div>
  );
};

export default BecomeUsaCitizen;
