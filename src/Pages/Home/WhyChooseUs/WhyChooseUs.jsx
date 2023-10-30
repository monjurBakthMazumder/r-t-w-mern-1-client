import { MdMiscellaneousServices, MdOutlinePriceChange } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { AiFillRightSquare } from "react-icons/ai";
const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 md:my-20 px-[5%] sm:px-[10%]">
      <div className="">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary">
          Why Choose Us
        </h1>
        <p className="text-neutral sm:text-base font-light my-5">
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation heading towards.
        </p>
        <div className="w-11/12">
          <h1 className="text-2xl font-bold text-primary flex gap-5 py-5 border-b border-primary">
            <MdMiscellaneousServices className="text-secondary" />
            Certified Expert Mechanics
          </h1>
          <h1 className="text-2xl font-bold text-primary flex gap-5 py-5 border-b border-primary">
            <BiDonateHeart className="text-secondary" />
            Fast And Quality Service
          </h1>
          <h1 className="text-2xl font-bold text-primary flex gap-5 py-5 border-b border-primary">
            <MdOutlinePriceChange className="text-secondary" />
            Best Prices in Town
          </h1>
          <h1 className="text-2xl font-bold text-primary flex gap-5 py-5 border-b border-primary">
            <FaAward className="text-secondary" />
            Awarded Workshop
          </h1>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-10">
          Additional Services
        </h1>
        <div className="">
          <ul className="col-span-2 text-lg text-neutral space-y-1">
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> General
              Auto Repair & Maintenance
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Transmission Repair & Replacement
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Tire Repair and Replacement
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> State Emissions Inspection
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Break Job / Break Services
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Electrical Diagnostics

            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Fuel System Repairs
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Starting and Charging Repair
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Emission Repair Facility
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Steering and Suspension Work
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Wheel Alignment
            </li>
            <li className="flex items-center gap-2">
              <AiFillRightSquare className="text-secondary text-xl" /> Computer Diagaonstic Testing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
