import SecondaryBanner from "../../../components/shared/SecondaryBanner";

const Blog = () => {
  return (
    <div>
      <SecondaryBanner
        image={
          "https://heitzimmigrationlaw.com/wp-content/uploads/2020/08/g7.jpg"
        }
        title={"Live & Work in the USA"}
        text={"Information and Tips on how to navigate U.S. Immigration Law"}
        mouse={false}
      />
    </div>
  );
};

export default Blog;
