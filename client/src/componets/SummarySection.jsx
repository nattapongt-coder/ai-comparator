function SummarySection({ summary }) {
  return (
    <div className="mt-6 p-4 border rounded bg-gray-50 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">🧠 Summary</h2>
      <p>{summary}</p>
    </div>
  );
}
export default SummarySection;

