import { PiUsersBold } from "react-icons/pi";
import GreenCardTypes from "../../../components/home/GreenCardTypes/GreenCardTypes";
import SpecialtyGreenCard from "../../../components/home/SpecialityGreenCard/SpecialtyGreenCard";
import BookingImmigration from "../../../components/shared/BookingImmigration";
import GreenCardDetails from "../../../components/shared/GreenCardDetails";
import SecondaryBanner from "../../../components/shared/SecondaryBanner";
import { RiPagesLine } from "react-icons/ri";
import Testimonials from "../../../components/home/Testimonials/Testimonials";

const GreenCardServices = () => {
  const cards = [
    {
      id: 1,
      icon: PiUsersBold,
      type: "family-based-green-card",
      title: "How long will it take to get a",
      titleSpan: "family-based green card?",
      text: "This will depend on which family category you are in. It’s important to understand that for many green cards, U.S. Citizenship and Immigration Services only issues a limited number of visas each year and the demand is always greater than the supply. Read on to learn if your category is considered to be “immediate” or if you will be on the waiting list for several years.",
      detailsTypes: [
        {
          type: "F-1",
          subType: "Immediate Relative",
          details:
            "The immediate relative category allows you to get your green card right away. This means you don’t have to wait for a visa number to become available as with the other family categories. However, there are only a few relationships that qualify. Marriage to a U.S. citizen, being a parent of an adult U.S. citizen, or being a minor child of a U.S. citizen are the only family relationships where you won’t have to wait. This is also the only category where being out of status in the U.S. (if you entered legally but overstayed your visa) won’t prevent you from being admissible for adjusting to a lawful permanent resident.",
        },
        {
          type: "F-2, F-3, F-4",
          subType: "Other Family",
          details:
            "All categories that are not an immediate relative require waiting many years for a green card. The date when a visa number will become available for you changes each month, depending on the newest counts of visas allocated and remaining for the year. The other big difference between this and the immediate relative category is that you must be in lawful status if you want to apply for your green card while in the U.S. Otherwise, you need to wait in your country for your visa. Once that date arrives, you will be able to process the application through your U.S. Consulate and then arrive in the U.S. as a lawful permanent resident.",
        },
      ],
    },
    {
      id: 2,
      icon: RiPagesLine,
      type: "employment-based-green-card",
      title: "How do I get an",
      titleSpan: "employment-based green card?",
      text: "Your U.S. employer may be able to sponsor you for a green card in a similar manner that a U.S. relative can petition for you. This process requires considerable more work and documentation. The employment categories for green cards are broken down into EB-1, EB-2, EB-3, EB-4 and EB-5. Just like the family categories, each has its own schedule of how soon the visa is available.",
      detailsTypes: [
        {
          type: "EB-1",
          subType: "Priority Workers",
          details:
            "The extraordinary ability category is the only one where no employer sponsor is needed. The individual must posses extraordinary ability in the arts, sciences, education, business or athletics which is demonstrated by national or international acclaim. The outstanding researcher or professor category is used for those recognized internationally for their outstanding achievements in a particular field. An executive or manager transferred to the U.S. may also qualify for the EB-1 green card if the U.S. company can petition for the executive. No labor certification is required for these EB-1 workers.",
        },
        {
          type: "EB-2",
          subType: "Advanced Degrees, Physician, Exceptional Ability",
          details:
            "The categories for the EB-2 green card are: professionals with advanced degrees (any degree above a B.A.), physicians who will practice in a U.S. under-served area, and those with exceptional ability in the arts, sciences, or business. Plus, there is a special National Interest Waiver which exempts the professional from needing a labor certification if the employment is of substantial merit that will benefit the country nationally.",
        },
        {
          type: "EB-3",
          subType: "B.A. Degree, Skilled, Unskilled Workers",
          details:
            "This is the most popular category because it encompasses many individuals. Professionals with a B.A. degree, skilled workers with at least 2 years of experience, and unskilled workers with less than two years of training or experience all may qualify for a green card, if their U.S. employer can petition for them. Here, a labor certification is required (except for Nurses and Physical Therapists).",
        },
        {
          type: "EB-4",
          subType: "Religious Worker",
          details:
            "A member of a religious denomination that is coming to work in the U.S. as a minister, rabbi, priest, or religious worker such as religious counselor may qualify for a green card if the employer can petition for them. In the EB-4 category a labor certification is not required, meaning that the employer does not have to attest that there is no U.S. worker available for the job.",
        },
      ],
    },
  ];

  const familyBasedGreenCard = cards?.find(
    (card) => card.type === "family-based-green-card"
  );
  const employmentBasedGreenCard = cards?.find(
    (card) => card.type === "employment-based-green-card"
  );
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
      <SpecialtyGreenCard />
      <GreenCardDetails card={familyBasedGreenCard} />
      <GreenCardDetails card={employmentBasedGreenCard} />
      <Testimonials call={true} />
    </div>
  );
};

export default GreenCardServices;
