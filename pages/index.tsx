import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <Chart></Chart>;
}
