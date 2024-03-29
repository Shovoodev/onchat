import { useState } from "react"
import Button from "./Button"
import Input from "./Input"

const Login = () => {


  const [login , setLogin] = useState(true);
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  const handleSignup = () => {
      const data = {email , password , confirmPassword}
      console.log(data);
  }
  const handleSignin = () => {

    const data = {email, password}
    console.log(data)
  }
  return (
    <div className="w-full md:w-[450px]">
      <h1 className="text-white text-center font-bold text-4xl md:text-6xl mb-10">
        { login ? "Login" : "Register"}
      </h1>
      <div className="flex flex-col gap-3 bg-white w-full p-6 min-h-[150px] rounded-xl drop-shadow-xl">

      <Input name="Email" type="email" value={email} onChange={e => setemail(e.target.value)}/>
      <Input name="Password" type="password" value={password} onChange={e => setpassword(e.target.value)}/>
      { !login && <Input name="confirm-password" type="password" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}/>}
      {
        login ? (
          <>
          <Button text="Login" onClick={handleSignin}/>
          <Button text="Register" secondary onClick={()=> setLogin(false)}/>
          </>) : (
            <>
            <Button text="Register" onClick={handleSignup}/>
          <Button text="Register" secondary onClick={()=> setLogin(true)}/>
            </>
          )
      }
      
      </div>
    </div>
  )
}

export default Login