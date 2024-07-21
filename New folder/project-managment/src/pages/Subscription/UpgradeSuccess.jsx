import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getUserSubscription, upgradeSubscription } from "@/Redux/Subscription/Action";
import { CheckCheckIcon } from "lucide-react";

const UpgradeSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subscription } = useSelector((store) => store);

  const queryParams = new URLSearchParams(window.location.search);

  const paymentId = queryParams.get("payment_id");
  const planType = queryParams.get("planType");

  useEffect(() => {
    dispatch(upgradeSubscription(planType));
    dispatch(getUserSubscription(localStorage.getItem("jwt")));
  }, [dispatch, planType]);

  return (
    <div className="flex justify-center">
      <Card className="mt-20 space-y-5 flex flex-col items-center p-5 rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#E91E63] shadow-2xl w-[18rem]">
        <div className="flex items-center gap-4">
          <CheckCheckIcon className="h-9 w-9 text-green-500" />
          <p className="text-xl">Plan Upgraded Successfully</p>
        </div>
        <div className="space-y-3">
          <p className="text-green-500">Start date: {subscription.userSubscription?.subscriptionStartDate} </p>
          <p className="text-red-500">End date: {subscription.userSubscription?.getSubscriptionEndDate} </p>
          <p>Plan type: {subscription.userSubscription?.planType} </p>
          <Button onClick={() => navigate("/")}>Go to home</Button>
        </div>
      </Card>
    </div>
  );
};

export default UpgradeSuccess;
