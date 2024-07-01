import BookConsultant from "../../../components/home/BookConsultant/BookConsultant";
import ScheduleAnImmigration from "../../../components/home/ScheduleAnImmigration/ScheduleAnImmigration";
import CallAndLocation from "../../../components/home/callAndLocation/CallAndLocation";
import ContactUs from "../../../components/home/contactUs/ContactUs";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const Booking = () => {
  return (
    <div>
      <SecondaryBanner
        title={"It All Starts With A Consultation"}
        text={
          "We are ready to help! Book your consultation online or give us a call."
        }
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2023/03/Low-res-Nadine-Window-scaled.jpg"
        }
      />
      <div className="container mx-auto">
        <ScheduleAnImmigration />
        <ContactUs />
        <BookConsultant />
        <CallAndLocation />
      </div>
    </div>
  );
};

export default Booking;
