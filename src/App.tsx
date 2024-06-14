import './App.sass';
import { Button } from 'components/Button';
import { ReactComponent  as DownloadIcon } from 'assets/icons/download.svg';

function App() {
  return (
    <div className='wrapper'>
      <div>
      <Button size='XS'><DownloadIcon />Label</Button>
      <Button size='S' ><DownloadIcon />Label</Button>
      <Button          ><DownloadIcon />Label</Button>
      <Button size='L' ><DownloadIcon />Label</Button>
      <Button size='XL'><DownloadIcon />Label</Button>
      <Button size='XL' theme='outline'><DownloadIcon />Label</Button>
      <Button size='XL' theme='color-outline'><DownloadIcon />Label</Button>
      <Button size='XL' theme='clear'><DownloadIcon />Label</Button>
      <Button size='XL' theme='color-clear'><DownloadIcon />Label</Button>

        <Button disabled>Label</Button>
        <Button >
          <DownloadIcon />
          Label
        </Button>
      </div>
    </div>
  );
}

export default App;
