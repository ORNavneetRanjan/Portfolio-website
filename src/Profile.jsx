import React from "react";
function Profile() {
  return (
    <>
      <div class="flex flex-col lg:flex-row-reverse items-center lg:items-start w-full justify-center gap-5  p-7 lg:p-14">
        <img
          class="rounded-full h-44 lg:h-60 w-44 lg:w-60 object-cover m-0 lg:m-5"
          src="src\profile_picture.jpg"
          alt="profile picture"
        />

        <div class="flex flex-col items-center lg:items-start justify-center gap-5 lg:gap-7 p-7 lg:w-1/2">
          <h1 class="text-4xl lg:text-5xl font-bold text-center lg:text-left">
            Hi, I am Navneet, Frontend devloper
          </h1>
          <p class="text-center lg:text-left text-lg"></p>
          <button class="bg-red-400 text-white self-center lg:self-start px-4 py-2 rounded text-2xl lg:text-3xl">
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
