import * as React from "react";
import ProcessStep from "./ProcessStep";

export default function ProcessSteps() {
  const steps = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c493260a9422173a2ff2dcfb881d9102f9b97997126a6fa54e411e144943688f?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      title: "Register",
      extraClasses: "pr-1.5 w-[197px]",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2633e5778d3b724d71aeed627b0daab77bfb9e5e6461ed277e46deb17258c7cb?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      title: "Upload auction details",
      extraClasses: "w-[191px]",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/42e706cbf25568048b7ace5d85898f59c42bf52d0be4e565d302adb8c825adba?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      title: "manage auction listings",
      extraClasses: "w-[191px]",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/34ab0704c8bc005e24a8607330f3e68ec71560e29320db4cbd9799e1ea40a0c1?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      title: "update auction status",
      extraClasses: "pl-1.5 w-[197px]",
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 items-start self-center mt-24 max-md:mt-10 max-md:max-w-full">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          iconSrc={step.iconSrc}
          title={step.title}
          extraClasses={step.extraClasses}
        />
      ))}
    </div>
  );
}
