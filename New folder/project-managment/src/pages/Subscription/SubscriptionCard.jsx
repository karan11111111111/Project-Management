import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";

const SubscriptionCard = ({ data }) => {
  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#E91E63] shadow-2xl card p-5 space-y-5 w-[18rem]">
      <h2 className=" font-semibold">{data.planName}</h2>
      <p>
        <span className="text-2xl font-semibold">&#8377;{data.price}/</span>
        <span className="text-2xl font-semibold">{data.planType}</span>
      </p>
      {data.planType === "year" && <p className="text-green-500">30% off</p>}

      <Button className="w-full">{data.buttonName}</Button>

      <div>
        {data.features.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCheckIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
