import Image from "next/image";
import Card from "@/components/Card";

export default function About() {
  return (
    <div className="min-h-screen bg-center bg-fixed flex justify-center items-start py-24 px-4 sm:px-6 lg:px-8">
      <Card title="About">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 font-iceland">
          <div className="space-y-4 w-full md:w-2/3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              CHIMERA 2025
            </h1>
            <h2 className="text-2xl sm:text-3xl text-[#66e9fa]">
              March 1st, Ashoka University, Sonipat
            </h2>
          </div>
          <div className="w-48 h-48 sm:w-64 sm:h-64 relative flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Chimera Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-8 font-iceland mt-12">
          <p className="text-base sm:text-lg lg:text-xl text-[#98a0b3] leading-relaxed">
            IEEE Ashoka is proud to announce Chimera, an inter-university
            celebration of excellence in STEM research and innovation. Our
            objective is to showcase the work of our university&apos;s students
            across STEM fields while providing a vibrant platform for networking
            and an enjoyable weekend-long experience for all visitors. Chimera
            is especially unique because:
          </p>

          {/* Features List */}
          <ul className="space-y-4 text-[#98a0b3] pl-4 sm:pl-8">
            {[
              "It includes a wide array of disciplines, aligned with IEEE's overall goal",
              "It integrates research into the festival, drawing from Ashoka's rich research-oriented background",
              "Ashoka's liberal arts curriculum provides a unique, interdisciplinary background for the fest",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-base sm:text-lg lg:text-xl"
              >
                <span className="text-[#66e9fa]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        {/* {[
          {
            title: "Talks and Workshops",
            content:
              "Attendees will have the opportunity to engage with professionals...",
          },
          {
            title: "Competitions and Collaboration",
            content:
              "We will have multiple high-stakes competitions with prize money...",
          },
        ].map((section, index) => (
          <div key={index} className="py-8 sm:py-12 font-iceland">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              {section.title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#98a0b3] leading-relaxed">
              {section.content}
            </p>
          </div>
        ))} */}

        {/* Why Chimera Section */}
        <div className="py-8 sm:py-12 space-y-6 font-iceland">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">WHY CHIMERA?</h2>
          <p className="text-lg sm:text-xl italic text-[#98a0b3]">
            chimera [kahy-meer-uh]
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-[#98a0b3] leading-relaxed">
            The chimera, in Greek mythology, is a creature composed of parts
            from different animals, often embodying a fantastical amalgamation
            of features. The chimera is depicted as a fire-breathing monster
            with the body of a lion, the head of a goat protruding from its
            back, and a serpent for a tail. chi·mae·ra [kahy-meer-uh] Just as
            the chimera embodies a fusion of different animal parts, STEM
            represents a mix of distinct disciplines, each contributing its
            unique strengths to create something new and impactful. This
            interdisciplinary approach fosters innovation, driving progress
            across a wide range of fields, from medicine to space exploration,
            echoing the mythical chimera&apos;s ability to transcend the
            boundaries of individual creatures. We celebrate this ideology in
            IEEE Ashoka and hope to showcase it at Chimera 2024!
          </p>
        </div>

        {/* IEEE Section */}
        <div className="py-8 sm:py-12 space-y-6 font-iceland">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">IEEE@Ashoka</h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#98a0b3] leading-relaxed">
            The IEEE Ashoka Student Branch was founded to foster holistic
            development among STEM students at Ashoka University. Our mission is
            to encourage excellence and collaboration across STEM disciplines,
            providing essential skills and leadership training for an industry
            or academia career. Through service programs and our flagship
            hands-on lab sessions, we aim to cultivate a diverse and inclusive
            STEM culture while increasing technical literacy in our local
            community. We have garnered immense positive feedback on our work
            over the years and iteratively grown our 35+ members team.
          </p>
        </div>
      </Card>
    </div>
  );
}
