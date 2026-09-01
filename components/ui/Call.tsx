import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+380668029054"
      className="fixed right-5 bottom-5 z-50 w-14 h-14 bg-yellow-400 text-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
    >
      <Phone size={22} />
    </a>
  );
}