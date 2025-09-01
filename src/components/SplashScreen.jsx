import { useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  /* dismiss after total anim‑time (≈ 3.2 s) */
  useEffect(() => {
    const t = setTimeout(() => {
      // Fire a custom event so App can unmount this component
      window.dispatchEvent(new Event("BV_SPLASH_DONE"));
    }, 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="splash">
      <div className="splash__inner">
        <h1 className="splash__title">WELCOME TO</h1>
        <h2 className="splash__brand">BRAIN&nbsp;O&nbsp;VISION</h2>
      </div>
    </div>
  );
};

export default SplashScreen;
