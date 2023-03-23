import React from 'react';
import TextInputComponent from '../../../components/utils/textInput';
import FormTitle from '../../../components/formTitle/index';
import DropdownComponent from '../../../components/utils/dropdown';

const languageOptions = [
   { value: 'English', title: 'English' },
   { value: 'French', title: 'French' }
];

const EditAccount = () => {
   return (
      <>
         <div className="content-top">
            <div className="body-title">EDIT CUSTOMER ACCOUNT</div>
            <div className="body-explanation"></div>
            <div className="body-question">
               <div className="question-section marginate">
                  <FormTitle title="Employees" />
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
                        placeholder="35267"
                        label="Login"
                     />
                     <DropdownComponent
                        style={{ width: '450px', marginRight: '100px' }}
                        onChange={(value) => console.log('Town / city ', value)}
                        options={languageOptions}
                        label="Language"
                     />
                     <TextInputComponent
                        style={{ width: '100%', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="Email"
                        label="example@gmail.com"
                     />
                  </div>
               </div>
               <div className="question-section marginate">
                  <FormTitle title="Identity of the customer" />
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        minHeight: '250px'
                     }}
                  >
                     <TextInputComponent
                        style={{ width: '450px', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="35267"
                        label="Corporate Name"
                     />
                     <TextInputComponent
                        style={{ width: '450px', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="Email"
                        label="example@gmail.com"
                     />
                     <DropdownComponent
                        style={{ width: '490px', marginRight: '60px' }}
                        onChange={(value) => console.log('Town / city ', value)}
                        options={languageOptions}
                        label="Country"
                     />
                     <TextInputComponent
                        style={{ width: '450px', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="Email"
                        label="example@gmail.com"
                     />
                     <TextInputComponent
                        style={{ width: '450px', marginRight: '100px' }}
                        onChange={(e) => console.log(e)}
                        placeholder="example@gmail.com"
                        label="Email"
                     />
                     <TextInputComponent style={{ width: '450px' }} onChange={(e) => console.log(e)} placeholder="Address" label="Address" />
                  </div>
               </div>
               <div className="body-btns-Wrapper">
                  <div className="body-btn">Cancel</div>
                  <div className="body-btn body-btn-coloured">Update</div>
               </div>
            </div>
         </div>
      </>
   );
};

export default EditAccount;
