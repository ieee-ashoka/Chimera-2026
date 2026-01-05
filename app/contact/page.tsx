// app/contact/page.tsx
import Card from "@/components/Card";

export default function Contact() {
  return (
    <div className="min-h-screen  bg-center bg-fixed flex justify-center items-center">
      <Card title="Contact Us">
        <p className="text-white-700">
          <strong>Address:</strong> IEEE Student Branch, Ashoka University,
          Haryana, India
        </p>
        <p className="text-white-700">
          <strong>Email:</strong> ieee.asb@ashoka.edu.in
        </p>
        <a
          href="https://www.instagram.com/ieee.ashoka/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Instagram: @ieee.ashoka
        </a>
      </Card>
    </div>
  );
}
