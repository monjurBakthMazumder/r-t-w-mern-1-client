import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useAxiosSecure from "../../Hock/useAxiosSecure";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/services-count").then((res) => setCount(res.data.count));
    axiosSecure
      .get(`/services?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => setServices(res.data));
  }, [axiosSecure, currentPage, itemPerPage]);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);
  const handleItemParPageChange = (e) => {
    setItemPerPage(Number(e.target.value));
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="my-10 md:my-20 px-[5%] sm:px-[10%]">
      <h1 className="text-2xl md:text-3xl text-center text-primary underline font-bold mb-10">
        Total Services: {count}
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        Our Featured Services
      </h1>
      <p className="text-neutral sm:text-base font-light mt-3 mb-5 md:w-4/5 lg:w-2/3">
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new normal that has
        evolved from generation X is on the runway heading towards a streamlined
        cloud solution.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 my-10">
        <button
          onClick={handlePrevPage}
          className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white text-primary bg-transparent`}
        >
          Prev
        </button>
        {pages?.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white ${
              currentPage === page
                ? "bg-primary text-white"
                : "text-primary bg-transparent"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white text-primary bg-transparent`}
        >
          Next
        </button>
        <select
          value={itemPerPage}
          onChange={handleItemParPageChange}
          className="select select-primary w-fit text-primary"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Services;
