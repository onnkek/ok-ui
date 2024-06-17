import './App.sass';
import { Button } from 'components/Button';
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
import { Checkbox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { Dropdown } from 'components/Dropdown';
import { Avatar } from 'components/Avatar';
import { Badge } from 'components/Badge';
import { Toggle } from 'components/Toggle';

function App() {
  return (
    <div className='wrapper'>
      <div>
        <Input Icon={DownloadIcon} />
        <Dropdown button={<Button theme='outline'>Open</Button>} items={[
          [{
            content: 'View profile',
            link: '/1',
            Icon: DownloadIcon
          },
          {
            content: 'Settings',
            link: '/2',
            Icon: DownloadIcon
          },
          {
            content: 'Keyboard shortcuts',
            link: '/3',
            disabled: true,
            Icon: DownloadIcon,

          }],
          [{
            content: 'View profile',
            link: '/1',
            Icon: DownloadIcon
          },
          {
            content: 'Settings',
            link: '/2',
            Icon: DownloadIcon
          },
          {
            content: 'Keyboard shortcuts',
            link: '/3',
            Icon: DownloadIcon
          }],
          [{
            content: 'Log out',
            link: '/3',
            Icon: DownloadIcon
          }]
        ]}
          header={
            (<div style={{ display: 'flex', padding: '12px 16px', position: 'relative' }}>
              <Avatar
                status='dnd'
                size='M'
                src='https://avatars.dzeninfra.ru/get-zen_doc/1863639/pub_5e9448a5539dae4595bd8de7_5e983d88a9c5474bc701b44e/scale_1200'
              />
              <div style={{ marginLeft: '12px' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', lineHeight: '20px', color: '#344054' }}>Olivia Rhye</div>
                <div style={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px', color: '#475467' }}>olivia@unitedui.com</div>
              </div>
            </div>)
          }
        />
        <Avatar
          status='dnd'
          size='XL'
          src='https://avatars.dzeninfra.ru/get-zen_doc/1863639/pub_5e9448a5539dae4595bd8de7_5e983d88a9c5474bc701b44e/scale_1200'
        />
        <div style={{ display: 'flex', borderBottom: '1px solid gray', padding: '10px' }}>
          <div>
            <Badge color='gray' dot size='L' theme='primary'>Label</Badge>
            <Badge color='gray' dot size='L' theme='outline'>Label</Badge>
            <Badge color='gray' dot size='L' theme='rect'>Label</Badge>
            <Badge color='gray' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='brand' dot size='L' theme='primary'>Label</Badge>
            <Badge color='brand' dot size='L' theme='outline'>Label</Badge>
            <Badge color='brand' dot size='L' theme='rect'>Label</Badge>
            <Badge color='brand' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='error' dot size='L' theme='primary'>Label</Badge>
            <Badge color='error' dot size='L' theme='outline'>Label</Badge>
            <Badge color='error' dot size='L' theme='rect'>Label</Badge>
            <Badge color='error' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='warning' dot size='L' theme='primary'>Label</Badge>
            <Badge color='warning' dot size='L' theme='outline'>Label</Badge>
            <Badge color='warning' dot size='L' theme='rect'>Label</Badge>
            <Badge color='warning' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='success' dot size='L' theme='primary'>Label</Badge>
            <Badge color='success' dot size='L' theme='outline'>Label</Badge>
            <Badge color='success' dot size='L' theme='rect'>Label</Badge>
            <Badge color='success' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='gray-blue' dot size='L' theme='primary'>Label</Badge>
            <Badge color='gray-blue' dot size='L' theme='outline'>Label</Badge>
            <Badge color='gray-blue' dot size='L' theme='rect'>Label</Badge>
            <Badge color='gray-blue' dot size='L' theme='modern'>Label</Badge>
          </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid gray', padding: '10px' }}>

          <div>
            <Badge color='blue-light' dot size='L' theme='primary'>Label</Badge>
            <Badge color='blue-light' dot size='L' theme='outline'>Label</Badge>
            <Badge color='blue-light' dot size='L' theme='rect'>Label</Badge>
            <Badge color='blue-light' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='blue' dot size='L' theme='primary'>Label</Badge>
            <Badge color='blue' dot size='L' theme='outline'>Label</Badge>
            <Badge color='blue' dot size='L' theme='rect'>Label</Badge>
            <Badge color='blue' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='indigo' dot size='L' theme='primary'>Label</Badge>
            <Badge color='indigo' dot size='L' theme='outline'>Label</Badge>
            <Badge color='indigo' dot size='L' theme='rect'>Label</Badge>
            <Badge color='indigo' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='purple' dot size='L' theme='primary'>Label</Badge>
            <Badge color='purple' dot size='L' theme='outline'>Label</Badge>
            <Badge color='purple' dot size='L' theme='rect'>Label</Badge>
            <Badge color='purple' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='pink' dot size='L' theme='primary'>Label</Badge>
            <Badge color='pink' dot size='L' theme='outline'>Label</Badge>
            <Badge color='pink' dot size='L' theme='rect'>Label</Badge>
            <Badge color='pink' dot size='L' theme='modern'>Label</Badge>
          </div>
          <div>
            <Badge color='orange' dot size='L' theme='primary'>Label</Badge>
            <Badge color='orange' dot size='L' theme='outline'>Label</Badge>
            <Badge color='orange' dot size='L' theme='rect'>Label</Badge>
            <Badge color='orange' dot size='L' theme='modern'>Label</Badge>
          </div>
        </div>
        <Toggle /><Toggle /><Toggle /><Toggle disabled /><Toggle disabled checked /><Toggle size='L' />

      </div>
    </div>
  );
}

export default App;
