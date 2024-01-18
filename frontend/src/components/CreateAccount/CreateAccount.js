import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CreateAccountWrapper, CreateAccountForm, FormField } from '../CreateAccount/CreateAccount.styled';
import { Background, HeaderText, Button, Input } from '../Login/Login.styled';

const CreateAccount = () => {
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

   const handleSubmit = () => {
      if (formData.password !== formData.confirmPassword) {
         // client-side validation (TODO: server-side should also be added for security)
         console.error('Password and Confirm Password do not match');
         // TODO: show error message to user
      }
      else {
         console.log('Form Data Submitted:', formData);
         // API request to backend here
      }
   };

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
               <FormField>
                  <Input 
                     type="password" 
                     name="confirmPassword"
                     placeholder="Confirm Password" 
                     value={formData.confirmPassword}
                     onChange={handleInputChange}
                  />
               </FormField>
               <Button type="button" className="btn" onClick={handleSubmit}>Confirm</Button>
            </CreateAccountForm>
      </CreateAccountWrapper>
   );
};

CreateAccount.propTypes = {};

CreateAccount.defaultProps = {};

export default CreateAccount;