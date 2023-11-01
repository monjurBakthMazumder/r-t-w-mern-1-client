import Banner from "../../Component/Banner/Banner";
import TeamsCard from "../../Component/TeamsCard/TeamsCard";
import useLoadEmployee from "../../Hock/useLoadEmployee";

const Teams = () => {
    const teams = useLoadEmployee()
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {teams?.map((team) => (
          <TeamsCard key={team._id} team={team} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Teams;
