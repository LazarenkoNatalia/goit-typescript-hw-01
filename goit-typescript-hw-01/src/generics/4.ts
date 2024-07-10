type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User   {
   const defaultUser: User = {
    name: "Natali",
    surname: "Portman",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}


createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});