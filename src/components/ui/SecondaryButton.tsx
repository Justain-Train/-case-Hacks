type SecondaryButtonProps = {
  label: string;
  onClick: (e? : React.MouseEvent<HTMLButtonElement>) => void;
};

export default function SecondaryButton({ label, onClick }: SecondaryButtonProps) {
  return (
    <div className="flex items-center justify-center whitespace-nowrap md:scale-[0.9] lg:scale-[1]">
      <button
        className={`flex items-center overflow-hidden cursor-pointer transition-all duration-200 bg-background hover:scale-105`}
        onClick={onClick}
        style={{
          imageRendering: "pixelated",
          border: "2px solid #e8c766",
          borderRadius: "6px",
          boxShadow: "2px 4px 0px #cfaf57",
        }}
      >
        <div
          className={`px-2 py-2 flex items-center justify-center transition-colors bg-secondary duration-200`}
        >
          <div className="grid grid-cols-3 gap-1 transition-all duration-300">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="w-1 h-1 bg-font" />
            ))}
          </div>
        </div>

        <div className="px-2 flex justify-center items-center">
          <span className="text-font font-semibold text-lg transition-all duration-200">
            {label}
          </span>
          <svg
            className="ml-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 5L13 10L7 15"
              stroke="#52443c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
