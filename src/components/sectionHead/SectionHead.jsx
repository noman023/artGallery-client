export default function SectionHead({ children }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl lg:text-4xl font-bold  underline">{children}</h1>
    </div>
  );
}
