import React, { useState } from 'react';
import axios from 'axios';
import PromptInput from './components/PromptInput';
import ResponseGrid from './components/ResponseGrid';
import SummarySection from './components/SummarySection';
import ReferencesSection from './components/ReferencesSection';

function App() {
  const [prompt, setPrompt] = useState('');
  const [responses, setResponses] = useState({});
  const [summary, setSummary] = useState('');
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('/api/compare', { prompt });
      setResponses(res.data.responses);
      setSummary(res.data.summary);
      setReferences(res.data.references || []);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto p-6">
          <button className="mb-4 px-3 py-1 bg-gray-800 text-white rounded" onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
          <h1 className="text-3xl font-bold mb-4">AI Answer Comparator</h1>
          <PromptInput prompt={prompt} setPrompt={setPrompt} handleSubmit={handleSubmit} />
          {loading && <div className="animate-spin h-10 w-10 border-t-4 border-blue-500 rounded-full mx-auto my-6"></div>}
          {error && <div className="bg-red-100 text-red-700 p-3 rounded">{error}</div>}
          <ResponseGrid responses={responses} />
          <SummarySection summary={summary} />
          <ReferencesSection references={references} />
        </div>
      </div>
    </div>
  );
}
export default App;

