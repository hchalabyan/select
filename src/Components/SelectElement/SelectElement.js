import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./SelectElement.scss";
import SignatureLayout from "../SignatureLayout/SignatureLayout";
import PageLayout from "../PageLayout/PageLayout";
const SelectElement = () => {
  const options = [
    { value: "signature", label: "Email signature layout" },
    { value: "page", label: "Page layout" },
  ];

  const [selectedOption, setSelectedOption] = useState({
    value: null,
  });

  return (
    <div className="SelectElement">
      <Select
        onChange={setSelectedOption}
        options={options}
        placeholder="Select Template"
        className="react-select-container"
        classNamePrefix="react-select"
      />
      {selectedOption.value === "signature" ? (
        <SignatureLayout />
      ) : selectedOption.value === "page" ? (
        <PageLayout />
      ) : null}
    </div>
  );
};

export default SelectElement;
