import { SignInButton, SignUpButton } from "@clerk/react";
import heroImg from "../assets/shessimg.jpg";

function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center bg-cover"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: "center 75%",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Chess Boardga Xush Kelibsiz
      </h1>
      <p className="text-lg text-white max-w-xl mb-8">
        ChessBoardda shaxmatni o'rganing . Kirish yoki ro'yxatdan o'ting va
        boshlang.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <SignUpButton mode="modal">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg ">
            Boshlash
          </button>
        </SignUpButton>
        <SignInButton mode="modal">
          <button className="px-6 py-3 bg-white text-black rounded-lg">
            Kirish
          </button>
        </SignInButton>
      </div>
    </div>
  );
}

export default Home;
