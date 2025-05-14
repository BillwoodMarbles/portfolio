import Logo from "./Logo";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-lvh flex items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="logo-container">
        <a
          href="https://www.linkedin.com/in/harrisonwallin/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <Logo />
        </a>
      </div>
    </div>
  );
};
export default SplashScreen;
