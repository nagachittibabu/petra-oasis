import CoreValues from "../../components/CompanyCore";
import Contact from "../../components/contact";
import Projects from "../../components/Projects";
import PromiseCard from "../../components/PromiseCard";

export default function Home() {
  return (
   <>
   < PromiseCard />
   < CoreValues />
   < Projects />
   < Contact />
   </>
  );
}
