const LoadingEmployeeDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-h-screen">
      <div className="animate-pulse">
        <div className="h-72 bg-primary"></div>
      </div>
      <div className="animate-pulse md:col-span-2">
        <div className="space-y-5">
          <div className="h-4 w-1/2 px-5 py-[10px] bg-primary"></div>
          <div className="h-3 w-1/3 px-5 py-[10px] bg-primary"></div>
          <div className="h-2 w-1/3 px-5 py-[10px] bg-primary"></div>
          <div className="h-4 w-1/3 px-5 py-[10px] bg-primary"></div>
          <div className="h-32 bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingEmployeeDetails;
