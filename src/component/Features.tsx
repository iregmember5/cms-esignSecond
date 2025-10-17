// Features Component with hardcoded data
// import { AiOutlineSignature } from "react-icons/ai";
// import { CiLock, CiMedicalClipboard } from "react-icons/ci";
// import { GiArtificialIntelligence, GiLinkedRings } from "react-icons/gi";
// import {  HiOutlineUsers } from "react-icons/hi";
// import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
// import { IoBarChartOutline } from "react-icons/io5";

// const Features = () => {
//   const features = [
//     { title: 'E-Sign Request', description: 'Send, sign, and track documents effortlessly', icon: <AiOutlineSignature /> },
//     { title: 'Smart Templates', description: 'Reusable templates for faster workflows', icon: <CiMedicalClipboard /> },
//     { title: 'Real-time Dashboard', description: 'Complete visibility into all processes', icon: <IoBarChartOutline /> },
//     { title: 'Team Management', description: 'Roles, permissions, and collaboration tools', icon: <HiOutlineUsers /> },
//     { title: 'AI Integration', description: 'Automated workflows with intelligent routing', icon: <GiArtificialIntelligence /> },
//     { title: 'Secure Storage', description: 'Bank-level security with audit trails', icon: <CiLock /> },
//     { title: 'Mobile Ready', description: 'Sign and manage documents on any device', icon: <HiOutlineDevicePhoneMobile /> },
//     { title: 'API Access', description: 'Integrate with your existing systems', icon: <GiLinkedRings /> },
//   ];

//   return (
//     <section id="features" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
//             Powerful Features for{' '}
//             <span className="text-blue-600">Modern Workflows</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Everything you need to streamline your document signing process and boost productivity
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="flex justify-center flex-col items-center">
//                 <div className="text-5xl mb-4 text-blue-600">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

// Features Component with dynamic data
import React from "react";
import { SectionProps, FeatureItem } from "@/component/types";
const Features: React.FC<SectionProps> = ({ data }) => {
  const defaultFeatures = [
    {
      title: "E-Sign Request",
      description: "Send, sign, and track documents effortlessly",
      icon: "📝",
    },
    {
      title: "Smart Templates",
      description: "Reusable templates for faster workflows",
      icon: "📋",
    },
    {
      title: "Real-time Dashboard",
      description: "Complete visibility into all processes",
      icon: "📊",
    },
    {
      title: "Team Management",
      description: "Roles, permissions, and collaboration tools",
      icon: "👥",
    },
    {
      title: "AI Integration",
      description: "Automated workflows with intelligent routing",
      icon: "🤖",
    },
    {
      title: "Secure Storage",
      description: "Bank-level security with audit trails",
      icon: "🔒",
    },
    {
      title: "Mobile Ready",
      description: "Sign and manage documents on any device",
      icon: "📱",
    },
    {
      title: "API Access",
      description: "Integrate with your existing systems",
      icon: "🔗",
    },
  ];

  const features = data?.features?.length > 0 ? data.features : defaultFeatures;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {data?.features_head || "Powerful Features"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data?.features_introduction ||
              "Everything you need to streamline your process"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature: FeatureItem, index: number) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center flex-col items-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
