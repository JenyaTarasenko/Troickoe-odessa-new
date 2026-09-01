
import { MapPin } from "lucide-react";

export default function MapButton() {
  return (
    <a
      href="https://maps.google.com/?cid=3290012523000835990&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-lg transition hover:scale-105"
    >
      <MapPin size={22} />
    </a>
  );
}

