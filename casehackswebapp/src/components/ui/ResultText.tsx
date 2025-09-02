export default function ResultText({
  resultMessage,
  hasError,
}: {
  resultMessage: string;
  hasError: boolean;
}) {
  return (
    <div className={`${hasError ? "text-red-500" : "text-primary"} `}>
      {resultMessage}
    </div>
  );
}
