import Card from "@/components/Card";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Chimera?",
      answer: "Chimera is a STEM fest organized by IEEE Ashoka University.",
    },
    {
      question: "How can I participate?",
      answer: "You can participate by registering on our website.",
    },
    {
      question: "Are there any fees?",
      answer: "Participation in Chimera is free of cost.",
    },
  ];

  return (
    <div className="min-h-screen  bg-center bg-fixed flex justify-center items-center">
      <Card title="Frequently Asked Questions">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white-900">
                {faq.question}
              </h3>
              <p className=" text-white-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
