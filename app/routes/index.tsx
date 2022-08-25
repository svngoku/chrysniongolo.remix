import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import Languages from "~/components/Languages";
import Profile from "~/components/Profile";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <div className="px-5vw py-9 lg:py-12">
        <Header />
        <Profile />
        <Languages />

    </div>
    </>
  );
}