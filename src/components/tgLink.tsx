import { Send } from "lucide-react";

export default function TgLink() {
  return (
    <a
      href="https://t.me/mirodilov1ch"
      className="fixed flex items-center justify-center bottom-6 right-6 z-50 bg-[#DCBA94] rounded-full shadow-lg w-15 h-15 animate-pulse hover:scale-105 transition-transform cursor-pointer"
    >
      <Send size={40} color="white" />
    </a>
  );
}
