import { useState } from "react";

const textFromUrl = (() => {
  // read from url param ?json=...
  const url = new URL(window.location.href);
  const text = url.searchParams.get("text");
  return text ?? "";
})();
function App() {
  const [text, setText] = useState(textFromUrl);
  return (
    <>
      <div>cosense-userscript-study</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {window.opener && (
        <button
          onClick={() => {
            if (window.opener) {
              window.opener.postMessage(text, "*");
              window.close();
            }
          }}
        >
          done
        </button>
      )}
    </>
  );
}

export default App;
