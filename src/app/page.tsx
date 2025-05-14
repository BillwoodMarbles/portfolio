import SplashScreen from "./components/SplashScreen";

export default function Home() {
  // const history = [
  //   {
  //     year: 2023,
  //     title: "Software Engineer",
  //     company: "Company Name",
  //     description: "Description of the role and responsibilities.",
  //   },
  //   {
  //     year: 2022,
  //     title: "Intern",
  //     company: "Company Name",
  //     description: "Description of the role and responsibilities.",
  //   },
  //   {
  //     year: 2021,
  //     title: "Intern",
  //     company: "Company Name",
  //     description: "Description of the role and responsibilities.",
  //   },
  // ];

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black z-10 opacity-50"></div>

      <SplashScreen />

      <div className="grid grid-rows-[20px_1fr_20px] bg-[#141414] items-start justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
        {/* <main className="flex flex-col gap-[32px] items-center sm:items-start w-full">
          <div className="relative flex flex-col gap-[8px] items-center text-center w-full min-h-[300px] justify-center bg-amber-800">
            <h1 className="text-[32px] sm:text-[48px] text-white font-bold text-center">
              Harrison Wallin
            </h1>
            <p className="text-[16px] sm:text-[20px] text-white font-semibold text-center">
              Software Engineer
            </p>

            <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-black z-10 opacity-50"></div>
          </div>

          <div className="w-full p-6">
            <div className="grid grid-cols-3  gap-[8px] items-center sm:items-start text-center sm:text-left">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="bg-amber-100 hover:scale-105 transition-transform relative p-2 rounded-xs  flex flex-col gap-[8px] items-center sm:items-start text-center sm:text-left h-full "
                >
                  <div className="w-full">
                    <h2 className="text-[20px] sm:text-[24px] text-white font-bold">
                      {item.year}
                    </h2>
                  </div>

                  <div className="opacity-50 absolute top-[100%]">
                    <p className="text-[16px] sm:text-[20px] text-white font-semibold">
                      {item.title} at {item.company}
                    </p>
                    <p className="text-[14px] sm:text-[16px] text-white font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main> */}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
