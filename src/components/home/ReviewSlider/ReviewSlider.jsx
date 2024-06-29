import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../../shared/ReviewCard";

const ReviewSlider = () => {
  const reviews = [
    {
      id: 1,
      review:
        "So far everything is fine, the lawyer is very kind and has answered all our doubts and helped us a lot with our case",
      name: "Leidy",
      date: "12/7/2024",
    },
    {
      id: 2,
      review: "Excellent lawyer and very honest",
      name: "Jose",
      date: "14/8/2024",
    },
    {
      id: 3,
      review:
        "Nadine is very helpful and always available to help with any questions I might have regarding my case.",
      name: "Thandolwethu",
      date: "18/4/2024",
    },
    {
      id: 4,
      review:
        "I chose Nadine as my attorney for my case, she’s awesome, a true professional. She knows what she is doing. I can strongly recommend her to my friends.",
      name: "Hakei",
      date: "12/7/2024",
    },
    {
      id: 5,
      review:
        "The best lawyer ever! Very professional and caring. Someone you can trust with the most sensitive issues. Will definitely use Nadine’s services in the future!",
      name: "Usame",
      date: "29/5/2024",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0", // Ensures cards are centered without padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container container mx-auto">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id}>
            <ReviewCard review={review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
