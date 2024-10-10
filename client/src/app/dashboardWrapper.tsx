import React from "react";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return <div>DashboardWrapper{children}</div>;
};

export default DashboardWrapper;
