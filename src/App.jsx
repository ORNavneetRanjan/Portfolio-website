import React from "react";
import Profile from "./Profile";
function App() {
  return (
    <>
      <Profile />
      <div class="flex flex-col items-center  bg-sky-100 gap-5 p-5">
        <div class="flex flex-row justify-around gap-5 w-full ">
          <h2 class="text-center lg:text-start text-xl">Recent Posts</h2>
          <a
            class="hidden lg:block text-center lg:text-start text-xl text-sky-500 "
            href=""
          >
            View all
          </a>
        </div>
        <div class="flex flex-col lg:flex-row gap-5">
          <div class="flex flex-col flex-wrap gap-5 p-5 bg-white mx-2 rounded max-w-s lg:max-w-md">
            <h3 class="font-bold text-xl">
              Making a design system from scratch
            </h3>
            <p>12 Feb 2020 &emsp; | &emsp; Desingn, Pattern</p>
            <p class="">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet Sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div class="flex flex-col gap-5 p-5 bg-white mx-2 rounded max-w-s lg:max-w-md">
            <h3 class="font-bold text-xl">
              Making a design system from scratch
            </h3>
            <p>12 Feb 2020 &emsp; | &emsp; Desingn, Pattern</p>
            <p class="">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet Sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-center text-xl block bg-white p-5">Features</h2>
      <div class="w-full flex flex-col items-center gap-5">
        <div class="flex flex-col lg:flex-row gap-5 justify-center  items-center bg-white p-7 shadow-lg max-w-s lg:max-w-5xl">
          <img
            class="w-85 lg:w-60 h-57 lg:h-44 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FEmK6IRtAtTxac6lWcdvK3UdON3VaJyGvf4ubmdWAcb8k2NUp-gzpAhk-BmZtTDeqDWFNn-bvB73-Tz15y1q12JLcmDix2PQBFyhlprjWyn~7vQfEGc6ulKQ4PE5NLdk6ukfkjDLJR7lyId4cqrk5e5E7NIELIRDbvsst6v29pJMrqui1LnDBughhPK~fA4JbhMEIwmlyaw1MejcPw5t8Cy7Uxrh8aJnZWiH-NGyBtA4AQoO~b7oFuNxO2twAYgewyA4n8Qjx4dHfOzDXNnxc4HC6BPr2vCyOTkAisCQD9bnswlDwy2pj0OIKlYfRlPFMUlEQ~XG3nabjOG-kKHdXA__"
          />

          <div class="flex flex-col gap-5">
            <h3 class="text-violet-900 font-bold text-xl">
              Designing Dashboards
            </h3>

            <div class="flex gap-2 align-center">
              <p class="bg-violet-900 text-white px-2 rounded-full">2020</p>
              <p class="text-gray-500">Dashboard</p>
            </div>

            <p class="">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet Sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-5 invisible lg:visible justify-center  items-center bg-white p-7 shadow-lg max-w-s lg:max-w-5xl">
          <img
            class="w-85 lg:w-60 h-57 lg:h-44 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZTjHGSE1o2tPQWwZxXwi6zoVW~jOed341Bop5whPX06UJqKPxO~3f~ga9u6BZhQ8ZxZlnsffccgRPCmEDhBsirVBGFbWM2TIVwghObhl1ztf94BbjxmwET54W8TEBiNVGK9wy80RouwWhRofXk-UfInMRUVoKOx9K0HGlpaRSxsTcwSg6f4nIpupY5iLs07R64otZnNF05AcHmqd7PCMt4X0IHe1kRVLRp3adgeyBc6oa64FaV~JP64p8MUHXCDl2AMNVDR93LDXc5o5sONsCvfI8UJuAEufoh6MiPPdvwaIZhRbG7o91nopSdMtBskLD~bfWSRcn1mdMlTfrg0QQ__"
          />

          <div class="flex flex-col gap-5">
            <h3 class="text-violet-900 font-bold text-xl">
              Designing Dashboards
            </h3>

            <div class="flex gap-2 align-center">
              <p class="bg-violet-900 text-white px-2 rounded-full">2020</p>
              <p class="text-gray-500">Dashboard</p>
            </div>

            <p class="">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet Sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-5 invisible lg:visible justify-center  items-center bg-white p-7 shadow-lg max-w-s lg:max-w-5xl">
          <img
            class="w-85 lg:w-60 h-57 lg:h-44 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9Z7eU4UODwRy3XcsyPlzeqlLx6mqujodICMFmQlbeFtmC-hNixjZ~gPasw1UIsMvb58sh0wTlXHbfHdB3i5~zm9nBavPfQ7yMlZFbKj5NySSpoRjAUa5~HgikKWLAdA0bqzNEioNOvTWcS4eX8J6Re-2jvsn5FDYeeTBVq4o0NI5-NLN1FDiFxLZiMLnJ3jI-aaSB01wJQxf5oeJp3f5af8Tb4LLLyfLxWy1Wj3rC2QzcFusfHH3FMb6C6b8wrwV0Opl4--FWiRrpbzid~X0D2Zf4Mw3Cu4FUX7z2~jUtJym5W7LFRFX~7hfYNUqV3oV06dyqf50IOZQkQcn5vi1w__"
          />

          <div class="flex flex-col gap-5">
            <h3 class="text-violet-900 font-bold text-xl">
              Designing Dashboards
            </h3>

            <div class="flex gap-2 align-center">
              <p class="bg-violet-900 text-white px-2 rounded-full">2020</p>
              <p class="text-gray-500">Dashboard</p>
            </div>

            <p class="">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet Sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-5 bg-white p-5 shadow-lg w-full mt-8">
        <div class="flex justify-center bg-white  gap-5">
          <img
            class="w-8 h-8"
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"
            alt="facebook logo"
          />
          <img
            class="w-8 h-8"
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png"
            alt="instagram logo"
          />
          <img
            class="w-8 h-8"
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png"
            alt="twitter logo"
          />
          <img
            class="w-8 h-8"
            src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png"
            alt="linkedin logo"
          />
        </div>
        <p class="text-center">Copyright &copy; 2020 All rights reserved </p>
      </div>
    </>
  );
}

export default App;
