export default function Button({ styles, hanldeClick, children }) {
  const color = styles ? styles : "bg-amber-500 hover:bg-amber-600";

  return (
    <button className={`btn ${color} text-white`} onClick={hanldeClick}>
      {children}
    </button>
  );
}
