import { useEffect, useState } from "react";
import Banner from "../../Component/Banner/Banner";
import TeamsCard from "../../Component/TeamsCard/TeamsCard";
import useAxiosSecure from "../../Hock/useAxiosSecure";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [count, setCount] = useState(null);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/employees-count").then((res) => setCount(res.data.count));
    axiosSecure
      .get(`/employees?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => setTeams(res.data));
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
    <>
      <Banner title={"Our Teams"} />
      <div className="my-10 md:my-20 px-[5%] sm:px-[10%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          Our Team
        </h1>
        <p className="text-neutral sm:text-base font-light mt-3 mb-5 md:w-4/5 lg:w-2/3">
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution.
        </p>
        <h1 className="text-2xl md:text-3xl text-center text-primary underline font-bold mb-5">
          Total Employees: {count}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {teams?.map((team) => (
            <TeamsCard key={team._id} team={team} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 my-10">
          <button
            onClick={handlePrevPage}
            className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white text-primary bg-transparent`}
          >
            Prev
          </button>
          {pages?.map((page,i) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 border border-primary flex justify-center items-center gap-2 hover:bg-primary hover:text-white ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "text-primary bg-transparent"
              }`}
            >
              {++i}
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
    </>
  );
};

export default Teams;
