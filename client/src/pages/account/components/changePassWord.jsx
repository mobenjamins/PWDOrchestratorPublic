import React from 'react';
import TextInputComponent from '../../../components/utils/textInput';
import FormTitle from '../../../components/formTitle/index';
import DropdownComponent from '../../../components/utils/dropdown';

const languageOptions = [
   { value: 'English', title: 'English' },
   { value: 'French', title: 'French' }
];

const ChangePassword = () => {
   return (
      <>
         <div className="content-top">
            <div className="body-title">CHANGE YOUR PASSSWORD</div>
            <div className="body-explanation">
               For security reasons, your password must contain at least 10 characters including one lowercase letter, one uppercase letter, one digit
               and one special character (` ˜ ! @ $ % ^ & * ( ) _ - + = {} [ ] \ | : ; , . ? /)
            </div>
            <div className="body-question">
               <div className="question-section marginate">
                  {/* <FormTitle title="Employees" /> */}
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        minHeight: '200px'
                     }}
                  >
                     <TextInputComponent
                        style={{ width: '450px', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="Enter old password"
                        label="Old Password"
                     />
                     <TextInputComponent
                        style={{ width: '450px', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="Enter new password"
                        label="New Password"
                     />
                     <TextInputComponent
                        style={{ width: '100%', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="Enter confirm password"
                        label="Confirm Password"
                     />
                  </div>
               </div>
               <div className="body-btns-Wrapper">
                  <div className="body-btn">Cancel</div>
                  <div className="body-btn body-btn-coloured">Save</div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ChangePassword;
