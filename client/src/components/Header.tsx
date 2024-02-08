import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { caretDown, logoGithub, logoYoutube, moon } from "ionicons/icons";

const Header = () => {
  return (
    <header className="fixed w-full drop-shadow-xl bg-indigo-600 text-white">
      <nav className="container h-14 flex items-center">
        <Link to="/" className="font-semibold flex items-center">
          <IonIcon icon={logoYoutube} className="mr-2.5 text-2xl" />
          <span className="text-xl leading-8">Youtube DL</span>
        </Link>
        <div className="flex-1"></div>
        <ul className="flex items-center space-x-6 text-xl">
          <li>
            <button type="button" className="flex items-center space-x-0.5">
              <IonIcon icon={moon} />
              <IonIcon icon={caretDown} className="text-[10px]" />
            </button>
          </li>
          <li>
            <Link
              to="https://github.com/duc82/yt_dl"
              target="_blank"
              className="flex"
            >
              <IonIcon icon={logoGithub} className="text-[22px]" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
