import React from "react";

const LatestNews = () => {
  return (
    <div className="flex flex-col justify-center items-center my-24">
      <h1 className="text-4xl font-bold font-sans">Latest Articles & News</h1>
      <div className="flex space-x-5 w-full mt-9">
        <NewsCard
          category="Tech"
          title="Hackathon Event: Coding"
          date={new Date(2025, 0, 1)}
          image="https://placehold.co/600x400@2x.png"
        />
        <NewsCard
          category="Business"
          title="Tech Startups: How to ?"
          date={new Date(2025, 0, 7)}
          image="https://placehold.co/600x400@2x.png"
        />
        <NewsCard
          category="Tech"
          title="Coding Contest"
          date={new Date(2025, 0, 14)}
          image="https://placehold.co/600x400@2x.png"
        />
        <NewsCard
          category="Design"
          title="Design & Innovations"
          date={new Date(2025, 0, 21)}
          image="https://placehold.co/600x400@2x.png"
        />
      </div>
    </div>
  );
};

interface NewsCardProps {
  category: string;
  title: string;
  date: Date;
  image: string;
}

const NewsCard = (news: NewsCardProps) => {
  return (
    <div className="border border-[#f2f2f2] rounded-lg w-[25%] flex flex-col justify-center">
      <img src={news.image} alt={news.title} />
      <div className="p-4">
        <h1 className="text-orange-500 rounded-full w-fit text-sm font-semibold">
          {news.category}
        </h1>
        <h1 className="text-lg font-bold font-sans">{news.title}</h1>
        <h1 className="text-sm font-sans mt-12">
          {news.date.toLocaleDateString()}
        </h1>
      </div>
    </div>
  );
};

export default LatestNews;
