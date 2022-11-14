import ReviewCard from "./components/ReviewCard";

function App() {
  return (
    <div className="xs:min-h-screen bg-sky-50 py-7">
      <h1 className="text-center text-[42px] font-bold text-[#102a42]">Our Reviews</h1>
      <div className="w-[5rem] mx-auto h-[4px] bg-blue-400 mb-10"></div>
      <div className="mt-5">
        <ReviewCard />
      </div>
    </div>
  );
}

export default App;
