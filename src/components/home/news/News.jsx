import NewsCard from "../../shared/NewsCard";

const News = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-6 justify-between items-center mt-20 mb-10">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default News;
