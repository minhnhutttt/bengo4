import Breadcrumb from "@/components/common/Breadcrumb";
import Mainvisual from "./components/Mainvisual";
import Quotation from "./components/Quotation";
import Step from "./components/Step";
import Faq from "./components/Faq";

export default function Estimate() {

  return (
    <main className="">
      <Breadcrumb items={[{ label: '一括見積り' }]} className="mb-0" />
      <Mainvisual />
      <Quotation />
      <Step />
      <Faq />
      <Quotation type={2} className="mb-[60px]" />

    </main>
  )
}
