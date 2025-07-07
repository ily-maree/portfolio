import Image from "next/image";
import HeroComp from "./components/HomeComp/HeroComp";
import RecentPost from "./components/HomeComp/RecentPostsComp";
import FeaturedWorks from "./components/HomeComp/FeaturedWorksComp";
// import RecentPostsComp from "./components/HomeComp/RecentPostsComp";

export default function Home() {
  return (
   <div className="">
    <HeroComp/>
    <RecentPost/>
    <FeaturedWorks/>
   </div>
  )
}
