import TeammateCard from "../../shared/TeammateCard";

const Team = () => {
  const teammates = [
    {
      id: 1,
      image:
        "https://heitzimmigrationlaw.com/wp-content/uploads/2020/07/d10.jpg",
      name: "Nadine Heitz, Esq.",
      destination: "Immigration Attorney",
      details:
        "Nadine Heitz grew up in Toronto, where she was born to German immigrant parents who came to Canada for a better future. After a successful career as a marketing executive, Nadine brought her family to the U.S. on a TN visa to manage a high volume immigration law practice. It was here that she embarked on a career in law and began her immigration journey towards U.S. citizenship. Nadine is a member of the California State Bar and is admitted to practice immigration law in all 50 states.",
    },
    {
      id: 2,
      image:
        "https://heitzimmigrationlaw.com/wp-content/uploads/2021/12/Emice-Photo-SQ.jpg",
      name: "Emice Van Der Merwe",
      destination: "Administrative Assistant",
      details:
        "Emice was born and raised in South Africa where she graduated with a diploma in Events Planning and Management from Intec College. Emice has a passion for helping people and she is always willing to go that extra mile. When she is not working she enjoys spending time with her family, being outdoors, and just making memories that last forever. Emice has a love for the law and will be pursuing a degree in law in 2022.",
    },
    {
      id: 3,
      image:
        "https://heitzimmigrationlaw.com/wp-content/uploads/2021/12/Emice-Photo-SQ.jpg",
      name: "Gabe Adimari",
      destination: "Legal Assistant",
      details:
        "Gabe was born in Argentina and came to the United States at the young age of 10. Growing up in Lake Worth Beach, Florida, Gabe soon became accustomed to the American way of life. Gabe enjoys nature and loves to hike outdoors, but he also has a passion for boxing where he brushes up on his skills at the gym. Gabe is truly chasing the American dream and helping others to do the same while assisting the attorney with all immigration matters and translating for our Spanish speaking clients.",
    },
    {
      id: 4,
      image:
        "https://heitzimmigrationlaw.com/wp-content/uploads/2021/12/Emice-Photo-SQ.jpg",
      name: "Gabe Adimari",
      destination: "Legal Assistant",
      details:
        "Gabe was born in Argentina and came to the United States at the young age of 10. Growing up in Lake Worth Beach, Florida, Gabe soon became accustomed to the American way of life. Gabe enjoys nature and loves to hike outdoors, but he also has a passion for boxing where he brushes up on his skills at the gym. Gabe is truly chasing the American dream and helping others to do the same while assisting the attorney with all immigration matters and translating for our Spanish speaking clients.",
    },
    {
      id: 5,
      image:
        "https://heitzimmigrationlaw.com/wp-content/uploads/2021/12/Emice-Photo-SQ.jpg",
      name: "Gabe Adimari",
      destination: "Legal Assistant",
      details:
        "Gabe was born in Argentina and came to the United States at the young age of 10. Growing up in Lake Worth Beach, Florida, Gabe soon became accustomed to the American way of life. Gabe enjoys nature and loves to hike outdoors, but he also has a passion for boxing where he brushes up on his skills at the gym. Gabe is truly chasing the American dream and helping others to do the same while assisting the attorney with all immigration matters and translating for our Spanish speaking clients.",
    },
    {
      id: 6,
      image:
        "https://heitzimmigrationlaw.com/wp-content/uploads/2021/12/Emice-Photo-SQ.jpg",
      name: "Gabe Adimari",
      destination: "Legal Assistant",
      details:
        "Gabe was born in Argentina and came to the United States at the young age of 10. Growing up in Lake Worth Beach, Florida, Gabe soon became accustomed to the American way of life. Gabe enjoys nature and loves to hike outdoors, but he also has a passion for boxing where he brushes up on his skills at the gym. Gabe is truly chasing the American dream and helping others to do the same while assisting the attorney with all immigration matters and translating for our Spanish speaking clients.",
    },
  ];
  return (
    <div className="container mx-auto text-black my-36 space-y-4">
      <h2 className="text-[42px] leading-[45px] font-bold text-center">
        Meet the Team that makes the magic work
      </h2>
      <p className="text-[17px] leading-[30px] text-center">
        Visit our office to meet the team, find out how we can open the door to
        opportunity for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {teammates &&
          teammates.map((teammate) => (
            <TeammateCard key={teammate?.id} teammate={teammate} />
          ))}
      </div>
    </div>
  );
};

export default Team;
