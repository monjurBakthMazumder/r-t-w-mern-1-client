const LoadingServiceDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-screen">
      <div className="animate-pulse">
        <div className="h-72 bg-primary"></div>
      </div>
      <div className="animate-pulse ">
        <div className="space-y-4">
          <div className="h-4 w-1/2 px-5 py-[10px] bg-primary"></div>
          <div className="h-2 w-1/3 px-5 py-[10px] bg-primary"></div>
          <div className="h-32 bg-primary"></div>
          <div className="h-6 mt-5 w-1/3 px-5 py-[10px] bg-primary"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="h-20 bg-primary"></div>
            <div className="h-20 bg-primary"></div>
            <div className="h-20 bg-primary"></div>
            <div className="h-20 bg-primary"></div>
          </div>
          <div className="h-10 px-5 py-[10px] bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingServiceDetails;
