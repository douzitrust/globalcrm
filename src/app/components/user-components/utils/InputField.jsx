import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function InputField({ label, id, defaultValue, isDisabled }) {
  return (
    <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      disabled={isDisabled}
      id={id}
      className="dark:bg-cardbgDark border-[1px] border-borderSearchInputLight dark:border-borderSearchInputDark hover:border-black focus:border-black dark:hover:border-white dark:focus:border-white focus:outline-none rounded-md"
      defaultValue={defaultValue}
    />
  </div>
  )
}

export default InputField