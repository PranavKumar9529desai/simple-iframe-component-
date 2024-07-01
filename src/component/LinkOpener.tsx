import { useState } from "react";

export function InputBox({
  url,
  setUrl,
}: {
  url: string;
  setUrl: (url: string) => void;
}) {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <input
          className="h-10 w-[300px]"
          type="text"
          placeholder="Enter the website url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
    </>
  );
}

export const LinkOpener = ({ link }: { link: string }) => {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(true);
  };

  return (
    <div>
      <div className="flex justify-center w-full mt-3">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={handleClick}
        >
          Openlink
        </button>
      </div>
      <div className="mt-6 flex justify-center">
        {showIframe && (
          <iframe
            src={link}
            style={{ width: "50%", height: "400px", border: "none" }}
            title="Embedded Webpage"
          ></iframe>
        )}
      </div>
    </div>
  );
};
