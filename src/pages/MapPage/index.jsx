import { useState } from "react";
import Map from "../../components/Map";
import { Tooltip } from "react-tooltip";

const MapPage = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  return (
    <div className="h-[calc(100vh-82px)] bg-zinc-800 text-white max-md:pt-40 overflow-hidden flex flex-col justify-center items-center wrapper">
      <h6 className="px-6 pt-6">Detay görüntüle: {tooltipContent}</h6>
      <Map setTooltipContent={setTooltipContent} />
      {/* Todo <Tooltip content={tooltipContent} /> */}
    </div>
  );
};

export default MapPage;
