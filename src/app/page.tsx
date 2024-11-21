import Heading from "@/components/heading";
import MaxWidthWrapper from "@/components/max-width-wrapper";

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div
            className="relative mx-auto text-center flex flex-col items-center 
         gap-10"
          >
            <Heading> Real Time SaaS Insights</Heading>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Page;
