import { useState } from 'react';

import '../style/home.css';

export default function TextEditor() {
  const [text, setText] = useState('');

  function handleExport() {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'createdBullets.txt';
    link.click();
  }

  return (
    <>
      <div
        className='tw-ml-4 tw-mt-3 tw-h-[15vh] tw-rounded-lg tw-bg-slate-100'
        contentEditable
        onInput={(e) => setText(e.target.textContent)}
      >
        Copy and Paste here
      </div>

      <button
        type='button'
        className='btn btn-outline-light tw-ml-4 tw-mt-2'
        onClick={handleExport}
      >
        Export
      </button>
    </>
  );
}
