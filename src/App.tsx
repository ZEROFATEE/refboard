import { useState, type ChangeEventHandler } from 'react';
import './App.css'
import { fileToDataString } from './utils';


function App() { 
  const [previewImageSrc, setPreviewImageSrc] = useState<string>();

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0]

   if (!file) {
    return;
   }

   try{

   setPreviewImageSrc(await fileToDataString(file));
   } catch(e) {
    console.error(e);
   }
  };

return (
<>
 return <input type="file" onChange={handleChangeFile} accept='image/*'/>
 <img src={previewImageSrc} />
 </>
);
}

export default App;
 