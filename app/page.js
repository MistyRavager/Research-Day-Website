import Footer from "@/components/footer";
import EventCarousel from "@/components/home/EventCarousel";
import Header from "@/components/home/Header";
import Message from "@/components/home/Message";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col gap-5">
      <Header />
      <EventCarousel />
      <Message />
      <Footer />
    </div>
  );
}
