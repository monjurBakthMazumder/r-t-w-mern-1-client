import { ClockLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[75vh]">
      <ClockLoader color="#06175b" size={100} />
    </div>
  );
};

export default Loading;
