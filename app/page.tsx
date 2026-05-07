import { HomePage } from "@/components/home-page";

export const revalidate = 300;

export default async function Page() {
  return <HomePage />;
}
