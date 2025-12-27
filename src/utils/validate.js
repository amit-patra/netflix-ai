export const validateForm = (name, email, password) => {
    //Password : Stabilizer@1
  const isVaildName = /^[a-zA-Z\s'-]{2,50}$/.test(name);
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isVaildPassword =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d]*[!@#$%^&*][A-Za-z\d]*$/.test(
      password
    );

  if (!isVaildName) return "Name cannot be empty";
  if (!isValidEmail) return "Please enter vaild email";
  if (!isVaildPassword) return "Please enter valid password";
};
