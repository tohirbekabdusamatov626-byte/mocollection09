import { useUser } from "@clerk/react";
import heroImg from "../assets/shessimg.jpg";
import Board from "../components/Board";
import Sidebar from "../components/Sidebar";


function Dashboard() {
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
    
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Salom, {user?.firstName || user?.username || "foydalanuvchi"}!
        </h1>
        <p className="text-gray-600 mt-1">
          Bu sizning shaxsiy kolleksiya boshqaruv panelingiz.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Board />
        <Sidebar />
      </div>
    </div >
  );
}

export default Dashboard;
