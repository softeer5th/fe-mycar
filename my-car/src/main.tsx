import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import App from "./App.tsx";


console.log("Running test...");


async function enableMocking() {
    if (process.env.NODE_ENV !== "development") {
        return;
    }

    const { worker } = await import("./mocks/browser"); //Dynamic import하는 것이 눈에 띄였다.
    return worker.start({
        serviceWorker: {
            url: '/mockServiceWorker.js'
        }
    });
}

enableMocking().then(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});