import React, { useState } from 'react'; 

function App() {
  return <div>
    <Folder name='Desktop' isOpen={false}>
      <Folder name='Music'>
        <File name = 'All_stars.mp4'/>
        <File name = 'good_books.mp4'/>
      </Folder>
      <Folder name='Pictures'>
      <File name = 'dogs.jpeg'/>
      <File name = 'cats.jpeg'/>
      </Folder>
    </Folder>
    <Folder name='Applications'>
      <File name = 'xampp.exe'/>
      <File name = 'FIFA.exe'/>
    </Folder>

    </div>
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {name, children} = props;
  const direction = isOpen ? 'down': 'right';

  const handleClick = () => setIsOpen(!isOpen);

  return <div>
  <span onClick = { handleClick }>
    <i className='folder open icon'></i>
    <i class={`caret ${direction} icon`}></i>
  </span>
  { name }
  <div style={{ marginLeft : '17px'}}>
  { isOpen ? children : null }
  </div>
  </div>
}

const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileicons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
    exe: 'whmcs icon'
  };
  return <div>
    <i class={`${fileicons[fileExtension]} icon`}></i>
    {name}
    </div>
}

export default App;
