type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick : (e? : React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export default function Button({ text, disabled = false, onClick, className }: ButtonProps) {
  return (
    <button className="pt-1.5 cursor-pointer" onClick = {onClick} disabled = {disabled}>
      <div className=" group justify-center bg-[#C3BCC9] rounded-lg">
        <div className={`flex w-full items-center rounded-lg font-semibold bg-button border-[#C3BCC9] border-1 -translate-y-1.5  ${className} ${disabled ? " opacity-50 cursor-not-allowed" : "hover:-translate-y-2 transition hover:ease-out duration-300 active:-translate-y-0 active:duration-100"}`}>
          <p>{text}</p>
        </div>
      </div>
    </button>
  );
}
