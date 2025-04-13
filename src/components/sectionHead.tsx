interface SectionHeadProps {
  title: string;
  desc: string;
}
export default function SectionHead({ title, desc }: SectionHeadProps) {
  return (
    <div className="text-center">
      <p className="font-semibold text-4xl mb-4">{title}</p>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}
