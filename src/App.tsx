import './App.sass';
import { Button } from 'components/Button';
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg';
import { ReactComponent as USIcon } from 'assets/icons/US.svg';
import { Input } from 'components/Input';
import { Dropdown } from 'components/Dropdown';
import { Avatar } from 'components/Avatar';
import { Badge } from 'components/Badge';
import { Toggle } from 'components/Toggle';
import { Tooltip } from 'components/Tooltip';
import { Tooltip as RTooltip } from 'react-tooltip';
import { Progress } from 'components/Progress';
import { ProgressCircle } from 'components/ProgressCircle';
import { Slider } from 'components/Slider';
import { Tag } from 'components/Tag';
import { ButtonGroup } from 'components/ButtonGroup';
import { InputText } from 'components/InputText';
import { InputGroup } from 'components/InputGroup';
import { InputCode } from 'components/InputCode';

function App() {
  return (
    <div className='wrapper'>

      <div style={{ marginLeft: '100px' }}>
        <ButtonGroup>
          <Button theme='outline'>Label</Button>
          <Button theme='outline'>Label</Button>
          <Button theme='outline'>Label</Button>
        </ButtonGroup>
        <div style={{ margin: '20px' }} />
        <ButtonGroup>
          <Button theme='color-outline'>1</Button>
          <Button theme='color-outline'>2</Button>
          <Button theme='color-outline'>3</Button>
          <Button theme='color-outline'>4</Button>
          <Button theme='color-outline'>5</Button>
          <Button theme='color-outline'>6</Button>
        </ButtonGroup>

        <div style={{ marginTop: '20px' }}>
          <Slider
            text='tooltip-top'
            label="Opacity"
            formatOptions={{ style: 'percent' }}
            maxValue={500}
            type='range'
            defaultValue={[100, 350]}
            step={1}
          />
          <div style={{ height: '20px' }}></div>
          <Slider
            text='bottom'
            label="Opacity"
            formatOptions={{ style: 'percent' }}
            maxValue={500}
            type='single'
            defaultValue={100}
            step={1}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '50px' }}>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag>Label</Tag>
              <Tag size='M'>Label</Tag>
              <Tag size='L'>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag onRemove={() => { }}>Label</Tag>
              <Tag size='M' onRemove={() => { }}>Label</Tag>
              <Tag size='L' onRemove={() => { }}>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag counter='5'>Label</Tag>
              <Tag size='M' counter='5'>Label</Tag>
              <Tag size='L' counter='5'>Label</Tag>
            </div>
          </div>
          <div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag Icon={USIcon}>Label</Tag>
              <Tag Icon={USIcon} size='M'>Label</Tag>
              <Tag Icon={USIcon} size='L'>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag Icon={USIcon} onRemove={() => { }}>Label</Tag>
              <Tag Icon={USIcon} size='M' onRemove={() => { }}>Label</Tag>
              <Tag Icon={USIcon} size='L' onRemove={() => { }}>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag Icon={USIcon} counter='5'>Label</Tag>
              <Tag Icon={USIcon} size='M' counter='5'>Label</Tag>
              <Tag Icon={USIcon} size='L' counter='5'>Label</Tag>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '40px' }}>
          <div style={{ marginRight: '50px' }}>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox checked>Label</Tag>
              <Tag checkbox size='M'>Label</Tag>
              <Tag checkbox size='L'>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox onRemove={() => { }}>Label</Tag>
              <Tag checkbox checked size='M' onRemove={() => { }}>Label</Tag>
              <Tag checkbox size='L' onRemove={() => { }}>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox counter='5'>Label</Tag>
              <Tag checkbox size='M' counter='5'>Label</Tag>
              <Tag checkbox checked size='L' counter='5'>Label</Tag>
            </div>
          </div>
          <div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox Icon={USIcon}>Label</Tag>
              <Tag checkbox Icon={USIcon} size='M'>Label</Tag>
              <Tag checkbox Icon={USIcon} size='L'>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox Icon={USIcon} onRemove={() => { }}>Label</Tag>
              <Tag checkbox Icon={USIcon} size='M' onRemove={() => { }}>Label</Tag>
              <Tag checkbox Icon={USIcon} size='L' onRemove={() => { }}>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox Icon={USIcon} counter='5'>Label</Tag>
              <Tag checkbox Icon={USIcon} size='M' counter='5'>Label</Tag>
              <Tag checkbox Icon={USIcon} size='L' counter='5'>Label</Tag>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '50px' }}>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag dot>Label</Tag>
              <Tag dot size='M'>Label</Tag>
              <Tag dot size='L'>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag dot onRemove={() => { }}>Label</Tag>
              <Tag dot size='M' onRemove={() => { }}>Label</Tag>
              <Tag dot size='L' onRemove={() => { }}>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag dot counter='5'>Label</Tag>
              <Tag dot size='M' counter='5'>Label</Tag>
              <Tag dot size='L' counter='5'>Label</Tag>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '50px' }}>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox dot>Label</Tag>
              <Tag checkbox dot size='M'>Label</Tag>
              <Tag checkbox dot size='L'>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox dot onRemove={() => { }}>Label</Tag>
              <Tag checkbox dot size='M' onRemove={() => { }}>Label</Tag>
              <Tag checkbox dot size='L' onRemove={() => { }}>Label</Tag>
            </div>
            <div style={{ width: '350px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <Tag checkbox dot counter='5'>Label</Tag>
              <Tag checkbox dot size='M' counter='5'>Label</Tag>
              <Tag checkbox dot size='L' counter='5'>Label</Tag>
            </div>
          </div>
        </div>
        <div style={{ display: 'block' }}>
          <InputGroup group={false} label='Secure code' descr='This is a hint text to help user.' >
            <InputCode />
          </InputGroup>
        </div>
        <div style={{ display: 'block' }}>
          <InputGroup group={false} label='Secure code' descr='This is a hint text to help user.' >
            <InputCode size='M' />
          </InputGroup>
        </div>
        <div style={{ display: 'block' }}>
          <InputGroup group={false} label='Secure code' descr='This is a hint text to help user.' >
            <InputCode size='L' />
          </InputGroup>
        </div>
        <div style={{ display: 'block' }}>
          <InputGroup group={false} label='Secure code' descr='This is a hint text to help user.' >
            <InputCode type='3+3' />
          </InputGroup>
        </div>
        <div style={{ display: 'block' }}>
          <InputGroup group={false} label='Secure code' descr='This is a hint text to help user.' >
            <InputCode size='M' type='3+3' />
          </InputGroup>
        </div>
        <div style={{ display: 'block' }}>
          <InputGroup group={false} label='Secure code' descr='This is a hint text to help user.' >
            <InputCode size='L' type='3+3' />
          </InputGroup>
        </div>
        <div style={{ display: 'block' }}>
          <InputGroup label='Website' descr='This is a hint text to help user.' error='This is an error message.'>
            <Input area descr='This is a hint text to help user.' error='This is an error message.' placeholder='Enter a description...' />
          </InputGroup>
        </div>
        <div>
          <Input placeholder='Enter a description...' />
        </div>
        <div>
          <Input area placeholder='Enter a description...' />
        </div>
        <div>
          <Input disabled area placeholder='Enter a description...' />
        </div>
        <div>
          <InputGroup label='Website' descr='This is a hint text to help user.'>
            <Input descr='This is a hint text to help user.' placeholder='Enter a description...' />
          </InputGroup>
        </div>
        <div>
          <Input Icon={DownloadIcon} placeholder='olivia@unitedui.com' />
        </div>
        <div>
          <Input disabled Icon={DownloadIcon} placeholder='olivia@unitedui.com' />
        </div>
        <div>
          <InputGroup label='Website' descr='This is a hint text to help user.' error='This is an error message.'>
            <InputText>https://</InputText>
            <Input Icon={DownloadIcon} descr='This is a hint text to help user.' error='This is an error message.' placeholder='olivia@unitedui.com' />
          </InputGroup>
        </div>
        <div>
          <InputGroup label='Website' descr='This is a hint text to help user.' error='This is an error message.'>
            <Input Icon={DownloadIcon} descr='This is a hint text to help user.' error='This is an error message.' placeholder='olivia@unitedui.com' />
            <Button theme='outline'>
              <DownloadIcon />
              Copy
            </Button>
          </InputGroup>
        </div>
        <div>
          <InputGroup label='Website' descr='This is a hint text to help user.' error='This is an error message.'>
            <Input Icon={DownloadIcon} descr='This is a hint text to help user.' error='This is an error message.' placeholder='olivia' />
            <InputText>@</InputText>
            <Input Icon={DownloadIcon} descr='This is a hint text to help user.' error='This is an error message.' placeholder='unitedui.com' />
            <Button theme='outline'>
              <DownloadIcon />
              Copy
            </Button>
          </InputGroup>
        </div>
        <div>
          <InputGroup label='Website' descr='This is a hint text to help user.' error='This is an error message.'>
            <InputText>https://</InputText>
            <Input Icon={DownloadIcon} descr='This is a hint text to help user.' error='This is an error message.' placeholder='olivia@unitedui.com' />
            <Button theme='outline'>
              <DownloadIcon />
              Copy
            </Button>
          </InputGroup>
        </div>


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
        <Toggle /><Toggle /><Toggle /><Toggle disabled /><Toggle disabled checked /><Toggle size='L' className='my-anchor-element' />
        <Tooltip />
        <RTooltip anchorSelect=".my-anchor-element">
          100%
        </RTooltip>
        <div style={{ width: '200px', marginTop: '50px' }}>
          <Progress value='70' text='tooltip-bottom' />
        </div>
        <div style={{ width: '700px', marginTop: '100px', display: 'flex', justifyContent: 'space-between' }}>
          <ProgressCircle value='50' size='XL' title='Active users' />
          <ProgressCircle value='100' size='XL' title='Active users' half />
        </div>

      </div>
    </div>
  );
}

export default App;
