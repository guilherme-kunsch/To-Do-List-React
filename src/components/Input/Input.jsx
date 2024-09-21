export function Input({ text, type = "text", name, value, onChange }) {
  return (
    <input
      className="bg-neutral-800 p-2 w-[40rem] rounded-lg text-white border border-black outline-none focus:border-purple-900 focus:border border-box mb-2"
      type={type}
      placeholder={text}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
