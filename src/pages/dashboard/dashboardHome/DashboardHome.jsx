const DashboardHome = () => {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-6">Dashboard Home :-</h2>
      <div className="grid grid-cols-3 gap-5">
        <div className="border border-l-8 border-l-green-600 rounded p-4 hover:bg-slate-100 transition-all duration-200">
          <p className="text-lg font-medium mb-3">Lorem, ipsum dolor</p>
          <span className="text-4xl font-bold">200 %</span>
        </div>
        <div className="border border-l-8 border-l-red-500 rounded p-4 hover:bg-slate-100 transition-all duration-200">
          <p>Lorem, ipsum dolor</p>
          <span className="text-4xl font-bold">200 %</span>
        </div>
        <div className="border border-l-8 border-l-yellow-500 rounded p-4 hover:bg-slate-100 transition-all duration-200">
          <p>Lorem, ipsum dolor</p>
          <span className="text-4xl font-bold">200 %</span>
        </div>
        <div className="border border-l-8 border-l-orange-500 rounded p-4 hover:bg-slate-100 transition-all duration-200">
          <p>Lorem, ipsum dolor</p>
          <span className="text-4xl font-bold">200 %</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
