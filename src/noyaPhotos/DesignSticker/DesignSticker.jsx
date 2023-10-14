import React, { useState } from 'react';
import './designSticker.css';

export default function DesignSticker() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [previewImg, setPreviewImg] = useState(null)

  const sendOrderViaSMS = async (e) => {
    e.preventDefault();
    const data = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      crnoyatials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify({ name, phone, image }), // body data type must match "Content-Type" header

    }
    const req = await fetch('https://eden-photos-backend-production.up.railway.app/api/upload-image', data)
    console.log(req)
  };


  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result.split(',')[1]);
    };
  };


  return (
    <div className='noya-photos-design-photo-con'>
      <form className='noya-photos-design-photo-form'>
        <h1 className='noya-photos-design-photo-form-title'>עיצוב מדבקה</h1>
        <input
          className='noya-photos-design-photo-form-input'
          placeholder='מה השם שלך'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='noya-photos-design-photo-form-input'
          placeholder='מה הטלפון שלך'
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>בחר תמונה</label>
        <input
          className='noya-photos-design-photo-form-input'
          type='file'
          // eslint-disable-next-line no-lone-blocks
          onChange={(e) => {{
            handleFileUpload(e)
            setPreviewImg(e.target.files[0])
          }}}
        />
        <button
          className='noya-photos-design-photo-form-button'
          onClick={sendOrderViaSMS}
        >
          שלח
        </button>
      </form>
      <div>
        <h1 className='noya-photos-preview-sticker-title'>
          המדבקה תראה כך
        </h1>
        <div className='noya-photos-preview-sticker-con'>
          {previewImg ?
          <img
            className='noya-photos-preview-sticker-img'
            src={previewImg ? URL.createObjectURL(previewImg) : ''}
            alt='Home Page'
          />
         : <h1>בחר תמונה בשביל לראות תצוגה מקדימה של המדבקה</h1>}
        </div>
      </div>
    </div>
  );
}
