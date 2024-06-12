import { UserButton } from "@clerk/nextjs";
import React from "react";

const Onboarding = () => {
  return (
    <div>
      {/* <h2>Onboarding</h2> */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Onboarding;
