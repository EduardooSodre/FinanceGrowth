import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummarryCards from "./_components/summary-cards";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <SummarryCards />
    </>
  );
};
export default Home;
