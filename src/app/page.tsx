import ComingSoonPage from "./coming-soon/CommingSoon";

const COMMING_SOON = true
export default function Home() {
  if (COMMING_SOON) {
    return <ComingSoonPage />
  } else {
    return (
      <Home />
    );
  }
}
