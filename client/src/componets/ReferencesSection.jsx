function ReferencesSection({ references }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">🔗 References</h2>
      <ul className="list-disc pl-6">
        {references.map((ref, idx) => (
          <li key={idx}>
            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{ref.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ReferencesSection;

