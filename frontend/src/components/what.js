import React from 'react';


const WhatsAppButton = () => {
  const handleWhatsAppButtonClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${7483614609}&text=${encodeURIComponent('Hi Prakruthi Driving School')}`);
  };

  return (
    <button onClick={handleWhatsAppButtonClick} id='chatid'>
      Chat on WhatsApp
    </button>
  );
};

export default WhatsAppButton;
