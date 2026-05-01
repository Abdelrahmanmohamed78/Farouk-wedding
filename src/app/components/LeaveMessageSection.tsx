import MainHeader from "./MainHeader";
import LeaveMessageForm from "./LeaveMessageForm";

function LeaveMessageSection() {

  return (
    <section className="py-20 px-5 bg-[#f6f0e4] text-[#835D2F] border-b border-b-[#ded5c8]">
      <MainHeader>Leave a Message</MainHeader>
      <p className="mt-5 mb-10">
        Share your love, wishes, or a note for the happy couple!
      </p>
      <LeaveMessageForm></LeaveMessageForm>
    </section>
  );
}

export default LeaveMessageSection;