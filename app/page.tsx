import Sidebar from "@/components/siderbar/Sidebar";
import Page from "./(A)/personal-Info/Page";
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full  bg-[#171717]">
      <section className=" container mx-auto flex gap-10">
        <div className="">
          <Sidebar />
        </div>

       <Page/>
      </section>
    </main>
  );
}
