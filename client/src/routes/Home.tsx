import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

const Home = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter a video URL"
          autoComplete="off"
          className="border border-gray-500 p-2.5 text-base rounded-md w-96 pr-14 outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-600 transition-all duration-300 ease-in-out shadow-md"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-1 flex items-center">
          <hr className="h-5 w-[1px] bg-gray-500 mr-1" />
          <button
            type="submit"
            className=" w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-300 transition-all"
          >
            <IonIcon icon={search} className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
