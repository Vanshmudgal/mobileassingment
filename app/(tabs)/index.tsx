import { useEffect } from "react";
import Home from "../Home";

export default function Index() {

  // Remove the "index" title on web
  useEffect(() => {
    if (typeof document !== "undefined") {
       document.title = "Your App Name"; // Set a proper title instead of empty string
  
    }
  }, []);

  return <Home />;
}
