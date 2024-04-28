export default function Button({ children }) {
  return (
    <button className="btn bg-amber-500 hover:bg-amber-600 text-white">
      {children}
    </button>
  );
}
