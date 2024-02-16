export function Home() {
  return (
    <section className="flex">
      <div className="w-[665px] h-[360px]">
        <img src="../images/banner.png" className="w-full h-full" alt="" />
      </div>
      <div className="mx-5 w-[200px]">
        <div className="bg-[#E3F0FF] p-3 rounded">
          <div className="flex mb-3">
            <img src="../images/avatar.png" alt="" />
            <span className="text-[16px] ml-2">
              Hi, user <br />
              let’s get stated
            </span>
          </div>
          <button className="w-[180px] h-[30px] rounded-[8px] bg-[#127FFF] text-white">
            Join now
          </button>
          <button className="w-[180px] h-[30px] rounded-[8px] text-[#127FFF] bg-white mt-2">
            Login
          </button>
        </div>
        <div className="bg-[#F38332] w-full h-[85px] rounded mt-[10px]">
          <p className="text-[16px] mx-4 pt-4 text-white">
            Get US $10 off with a new supplier
          </p>
        </div>
        <div className="bg-[#55BDC3] w-full h-[85px] rounded mt-[10px]">
          <p className="text-[16px] mx-4 pt-4 text-white">Send quotes with supplier preferences</p>
        </div>
      </div>
    </section>
  );
}
