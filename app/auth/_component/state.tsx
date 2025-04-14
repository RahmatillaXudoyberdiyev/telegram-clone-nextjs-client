'use client'

import { useAuth } from "@/hooks/use-auth"
import Verify from "./verify"
import SignIn from "./sign-in"

const StateAuth = () => {
  const { step } = useAuth()
  return (
    <div>

      {step === 'login' && <SignIn />}
      {step === 'verify' && <Verify />}
    </div>
  )
}
export default StateAuth
