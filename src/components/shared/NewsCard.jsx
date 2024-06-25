import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <div>
      <div className="">
        <div className="border-x border-t rounded-tl-lg rounded-tr-lg">
          <Link>
            <img
              className="rounded-tl-lg rounded-tr-lg"
              src={
                "https://heitzimmigrationlaw.com/wp-content/uploads/2024/04/Untitled-design-900x604.png"
              }
              alt=""
            />
            <div className="p-8 mt-7">
              <p className="text-[#999] mb-3 text-sm">April 30, 2024</p>
              <h2 className="text-2xl text-black font-bold mb-5">
                Navigating DACA Renewal: Understanding Criminal Barriers,
                Historical Insights, and Today’s Challenges
              </h2>
              <p className="mb-9 text-[#555]">
                First introduced in Congress in 2001, the Development, Relief,
                and Education for Alien (Immigrant) Minors (DREAM) Act aimed to
                provide a path to citizenship for undocumented immigrants who
                arrived in…{" "}
              </p>
            </div>
          </Link>
        </div>
        <div className="flex gap-6 items-center border rounded-bl-lg rounded-br-lg p-4">
          <Link className="flex items-center gap-2">
            <FaRegUser className=" text-[#b9b9b9]" />
            <p className="text-sm text-[#5d5d5d]">Nadine Heitz</p>
          </Link>
          <Link className="flex items-center gap-1 hover:text-blue-600">
            <CiHeart className="text-[#b9b9b9]" />
            <p className="text-sm text-[#5d5d5d]">0</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
