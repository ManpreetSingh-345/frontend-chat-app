import React from "react";
import userIcon from "@assets/user.png";
import robotIcon from "@assets/robot.png";
import bookIcon from "@assets/book.png";

const Grid = () => {
  return (
    <div>
      <div className="bg-white grid md:grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] place-content-around gap-10 text-center align-center p-[8vw]">
        <div className="border rounded-sm border-black p-15 md:row-start-1 md:row-end-2 grid gap-5 ">
          <div>
            <img src={userIcon} alt="User Icon" className="size-16 m-auto" />
          </div>
          <div>Communicate with others without the language barrier</div>
        </div>
        <div className="border rounded-sm border-black p-15 md:row-start-1 md:row-end-2 grid gap-5">
          <div>
            <img src={robotIcon} alt="User Icon" className="size-16 m-auto" />
          </div>
          <div>Be more productive at work with our A.I. assistant</div>
        </div>
        <div className="border rounded-sm border-black p-15 md:row-start-1 md:row-end-2 grid gap-5">
          <div>
            <img src={bookIcon} alt="User Icon" className="size-16 m-auto" />
          </div>
          <div>Learn a langauge at the same time!</div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
