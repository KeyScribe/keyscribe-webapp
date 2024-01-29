import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateAccountWrapper, CreateAccountForm, FormField } from '../CreateAccount/CreateAccount.styled';
import { Background, HeaderText, Button, Input } from '../Login/Login.styled';

const apiURL = process.env.REACT_APP_BACKEND_URL;

const CreateAccount = () => {
   const navigate = useNavigate()
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      username: '',
      emailAddress: '',
      password: '',
      confirmPassword: '',
   });

   const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
      ...prevData,
      [name]: value,
   }));
   };

   const handleSubmit = async () => {
      console.log('Form Data Submitted:', formData);
      try {
         const response = await fetch(`${apiURL}/register`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               username: formData.username,
               password: formData.password,
               emailAddress: formData.emailAddress,
               firstName: formData.firstName,
               lastName: formData.lastName,
            }),
         });
         if (response.status === 200) {
            console.log('Account successfully created');
            navigate('/login');
         } else {
            console.error('Error: User already exists!');
         }
      }
      catch {

      }
   };

   const fieldsFilled = formData.firstName && formData.lastName && formData.emailAddress && formData.username && formData.password && formData.confirmPassword;
   const confirmPasswordMatching = formData.password === formData.confirmPassword && formData.confirmPassword !== '';
   const rePW = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$");


   return (
      <CreateAccountWrapper data-testid="CreateAccount">
         <Background />
            <CreateAccountForm>
               <HeaderText>Create Account</HeaderText>
               <FormField>
                  <Input 
                     type="text"
                     name="firstName"
                     placeholder="First Name" 
                     value={formData.firstName}
                     onChange={handleInputChange}
                  />
               </FormField>
               <FormField>
                  <Input 
                     type="text" 
                     name="lastName"
                     placeholder="Last Name" 
                     value={formData.lastName}
                     onChange={handleInputChange}
                  />
               </FormField>
               <FormField>
                  <Input 
                     type="text" 
                     name="username"
                     placeholder="Username" 
                     value={formData.username}
                     onChange={handleInputChange}
                  />
               </FormField><FormField>
                  <Input 
                     type="text" 
                     name="emailAddress"
                     placeholder="Email Address" 
                     value={formData.emailAddress}
                     onChange={handleInputChange}
                  />
               </FormField>
               <FormField>
                  <Input 
                     type="password" 
                     name="password"
                     placeholder="Password" 
                     value={formData.password}
                     onChange={handleInputChange}
                  />
               </FormField>
               {
                  formData.password === '' || rePW.test(formData.password) ? null : 
                  <span style ={{
                     fontSize: '13px',
                     position: 'relative',
                     top: '-11px',
                     display: 'block',
                     textAlign: 'left',
                     fontWeight: 'bold',
                     color: 'pink',
                  }}>Password should have at least 8 characters, one capital letter, one number</span>
               }
               <FormField>
                  <Input 
                     type="password" 
                     name="confirmPassword"
                     placeholder="Confirm Password" 
                     value={formData.confirmPassword}
                     onChange={handleInputChange}
                  />
               </FormField>
               <Button 
                     type="button" 
                     className="btn" 
                     onClick={handleSubmit}
                     disabled={!fieldsFilled || !confirmPasswordMatching}
                     >
                        Confirm</Button>
            </CreateAccountForm>
      </CreateAccountWrapper>
   );
};

CreateAccount.propTypes = {};

CreateAccount.defaultProps = {};

export default CreateAccount;