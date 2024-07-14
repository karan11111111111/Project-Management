import React from 'react';
import SubscriptionCard from './SubscriptionCard';

const Subscription = () => {
  const paidPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team members",
    "Advanced Reporting",
    "Priority Support",
    "Email Notifications",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows"
  ];

  const annualPlan = [
    "Add unlimited projects",
    "Access to live chat",
    "Add unlimited team members",
    "Advanced Reporting",
    "Priority Support",
    "Everything included in the monthly plan",
  ];

  const freePlan = [
    "Add up to 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control",
  ];

  return (
    <div className='p-10'>
      <h1 className='text-3xl font-semibold py-5 pb-10 text-center'>Pricing</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
        <SubscriptionCard 
          data={{ 
            planName: "FREE", 
            features: freePlan, 
            planType: "free", 
            price: 0, 
            buttonName: "Current Plan" 
          }} 
        />
        <SubscriptionCard 
          data={{ 
            planName: "MONTHLY", 
            features: paidPlan, 
            planType: "month", 
            price: 49, 
            buttonName: "Get Started" 
          }} 
        />
        <SubscriptionCard 
          data={{ 
            planName: "YEARLY", 
            features: annualPlan, 
            planType: "year", 
            price: 411.6, 
            buttonName: "Get Started" 
          }} 
        />
      </div>
    </div>
  );
};

export default Subscription;
