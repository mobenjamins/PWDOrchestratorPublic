import React from 'react';
import TextInputComponent from '../../../components/utils/textInput';
import FormTitle from '../../../components/formTitle/index';
import DropdownComponent from '../../../components/utils/dropdown';

const languageOptions = [
   { value: 'English', title: 'English' },
   { value: 'French', title: 'French' }
];

const DeleteAccount = () => {
   return (
      <>
         <div className="content-top">
            <div className="body-title">DELETE YOUR ACCOUNT</div>
            <div className="body-explanation">
               If you no longer need to use the SIPSI online service, you can delete your account. You will no longer be able to access the history of
               your declarations or re-create an account using the same login.
            </div>
            <div className="body-question">
               <div className="body-btns-Wrapper">
                  <div className="body-btn">Cancel</div>
                  <div className="body-btn body-btn-coloured redbg">Delete</div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DeleteAccount;
