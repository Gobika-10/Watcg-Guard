import { Outlet } from "react-router-dom";
import { TopBar } from "./components/TopBar";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <main className="px-4 py-4 md:px-6 xl:px-8">
        <div className="mx-auto max-w-[1840px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
