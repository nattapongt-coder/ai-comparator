function PromptInput({ prompt, setPrompt, handleSubmit }) {
  return (
    <div className="mb-6">
      <textarea className="w-full p-3 border rounded" rows="4" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter your prompt..." />
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Compare Answers</button>
    </div>
  );
}
export default PromptInput;

