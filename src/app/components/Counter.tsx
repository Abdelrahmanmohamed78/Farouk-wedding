import { greatVibes } from "../layout";
import CounterDetails from "./CounterDetails";
import MainHeader from "./MainHeader";

function Counter({ weddingDate }: {weddingDate: Date}) {
  return (
    <section className="py-20 bg-[#f6f0e4]">
      <MainHeader>CountDown</MainHeader>
      <p className="uppercase mt-6 flex gap-1 justify-center text-[#835D2F] text-sm italic">
        Untill
        <span>
          {weddingDate.getDate() > 9
            ? weddingDate.getDate()
            : "0" + weddingDate.getDate()}
        </span> 
        <span>{weddingDate.toLocaleString('en-US', { month: 'long' })}</span>
        <span>{weddingDate.getFullYear()}</span>
      </p>
      <div className={`counter-holder ${greatVibes.className}`} data-aos="fade-up" data-aos-anchor-placement="top-center">
        <CounterDetails weddingDate={weddingDate}></CounterDetails>
      </div>
    </section>
  );
}

export default Counter;
