function ResponseGrid({ responses }) {
  const models = ['ChatGPT', 'Gemini', 'Copilot', 'Claude', 'Mistral'];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {models.map((model) => (
        <div key={model} className="border p-4 rounded shadow">
          <h3 className="font-bold text-lg mb-2">{model}</h3>
          <p>{responses[model] || 'Loading or unavailable.'}</p>
        </div>
      ))}
    </div>
  );
}
export default ResponseGrid;

