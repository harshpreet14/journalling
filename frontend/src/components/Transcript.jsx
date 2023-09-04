import Audio from "./Audio";
const Transcript = () => {
  return (
    <div className="rounded-3xl w-4/12  border border-purple-700 bg-[#ffffff]">
      <div className="flex flex-col m-3 h-5/6 mt-6 mb-10 rounded-3xl  p-3 overflow-hidden">
        <p className="text-xl mb-4 font-bold "> Record here...</p>
        <div className="text-sm border border-purple-700 p-2  mb-2 h-full rounded-xl bg-[#cdc1fc]">
          Hi, here goes the transcript
        </div>
        <Audio/>
      </div>
    </div>
  );
};


export default Transcript;
