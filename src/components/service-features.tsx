import { Headphones, ShieldCheck, Truck } from "lucide-react";



const services = [
    {
      icon: <Truck className="w-8 h-8 text-white" />, 
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />, 
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />, 
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
];

export default function ServiceFeatures() {
  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8 mb-8">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-black p-4 rounded-full border-4 border-gray-300 flex items-center justify-center">
            {service.icon}
          </div>
          <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
          <p className="text-black text-sm">{service.description}</p>
        </div>
      ))}
    </section>
  );
}
