import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { notFoundData } from "../data";

const buttonClasses =
  "inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-page px-4 py-16 text-center text-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_36rem_at_0%_0%,rgb(62_64_149/0.45),transparent),radial-gradient(circle_36rem_at_100%_100%,rgb(237_50_55/0.3),transparent)]"
      />

      <div>
        <p
          aria-hidden="true"
          className="bg-linear-to-r from-[#ff4f58] to-brand-red bg-clip-text text-[7rem] leading-none font-black text-transparent italic sm:text-[12rem]"
        >
          {notFoundData.code}
        </p>

        <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
          {notFoundData.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70 sm:text-lg">
          {notFoundData.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className={`${buttonClasses} bg-brand-red shadow-[0_12px_40px_-12px] shadow-brand-red/70 hover:bg-brand-red/90 focus-visible:outline-brand-red`}
          >
            <Home className="size-5" />
            {notFoundData.homeLabel}
          </Link>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className={`${buttonClasses} cursor-pointer border border-white/15 bg-black/30 hover:bg-white/10 focus-visible:outline-white`}
          >
            <ArrowLeft className="size-5" />
            {notFoundData.backLabel}
          </button>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
