import GreenCardTypes from "../../../components/home/GreenCardTypes/GreenCardTypes";
import BookingImmigration from "../../../components/shared/BookingImmigration";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const GreenCardServices = () => {
  return (
    <div>
      <SecondaryBanner
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2020/08/g4.jpg"
        }
        title={"Getting a Green Card"}
        text={
          "The most coveted immigration benefit.The pre-requisite to becoming a Naturalized United States citizen."
        }
        mouse={false}
      />
      <BookingImmigration
        title={"Unlock Your Path to a Green Card or Citizenship."}
        details={
          "Book your immigration consultation with our secure online booking tool today. Our experienced attorney will work with you to explore all possible avenues towards obtaining a green card and citizenship. All consultations are completely confidential, so you can trust us to provide the guidance and support you need to achieve your immigration goals."
        }
      />
      <GreenCardTypes />
    </div>
  );
};

export default GreenCardServices;
