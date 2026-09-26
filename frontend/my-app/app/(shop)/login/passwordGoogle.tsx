import { useState } from "react";

export default function Form() {
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative">
      {focus && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
      )}

      <div className="flex flex-col gap-3 relative z-20 w-80 mx-auto mt-40">
        <input placeholder="Email" className="p-2 border" />
        <input placeholder="Username" className="p-2 border" />

        <input
          type="password"
          placeholder="Password"
          className="p-2 border"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />

        <button className="p-2 bg-blue-500 text-white">Submit</button>
      </div>
    </div>
  );
}
