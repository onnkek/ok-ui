import './App.sass';
import { Button } from 'components/Button';
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';

function App() {
  return (
    <div className='wrapper'>
      <div>
        <Input Icon={DownloadIcon} />

      </div>
    </div>
  );
}

export default App;
