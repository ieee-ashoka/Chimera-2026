// app/sponsors/page.tsx
import Card from "@/components/Card";
import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    { name: "Premas Biotech", logo: "/images/sponsors/premas.png" },
    { name: "Koita Centre for Digital Health", logo: "/images/sponsors/kcdh.png" },
    { name: "Lodha Genius Programme", logo: "/images/sponsors/lodha.png" },
    { name: "Research Development Office", logo: "/images/sponsors/rdo.png" },
  ];

  return (
    <div className="min-h-screen bg-center bg-fixed flex justify-center items-center">
      <Card title="SPONSORS">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-md shadow-sm"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={300}
                height={100}
                className="h-auto w-full"
              />
              {/* <span className="text-white-700 font-medium">{sponsor.name}</span> */}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
