import './App.css';
import { LinkOpener , InputBox} from '../src/component/LinkOpener'; // Import the LinkOpener component
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  return (
    <div>
      <InputBox url={url} setUrl={setUrl} />
      <LinkOpener link={url} />
    </div>
  );
}

export default App;