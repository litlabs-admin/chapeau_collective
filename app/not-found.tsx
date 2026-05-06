import Link from "next/link";
import { Header } from "@/components/home/header";
import { Footer } from "@/components/home/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-white px-4 pt-[96px]">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-6">
            <h1
              className="font-display font-normal leading-[1.2] text-[#133F40]"
              style={{ fontSize: "clamp(80px, 20vw, 128px)" }}
            >
              404!
            </h1>
            <div className="flex flex-col items-center gap-2">
              <p className="max-w-[480px] font-display text-[16px] font-medium leading-[1.6] text-ink-soft">
                The page you are looking for is not available right now. But we&apos;re here to help you get back on track!
              </p>
            </div>
          </div>

          <Link
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-2 font-display text-[14px] font-medium leading-[1.4] text-white shadow-button transition-all hover:-translate-y-0.5 hover:brightness-95"
            href="/"
          >
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
