'use client'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslation } from '@/app/context/TranslationContext'
import FormFields from '../user-components/utils/FormFields'
import { useContext } from 'react'
import { UserContext } from '@/app/context/UserContext'

export default function CustomInformation({
  page,
  setIsDisabled,
  isDisabled,
  ...props
}) {
  const { t } = useTranslation()
  const [state] = useContext(UserContext)
  const fieldsData = [
    {
      id: 1,
      type: 'select',
      label: 'property_offered_by',
      idField: 'propertyOfferedBy',
      defaultValue: state?.userData?.userId
        ? props?.unit?.propertyOfferedBy
        : 'Agent',
      options: props?.options?.propertyOfferedBy,
      required: true,
    },
    {
      id: 2,
      type: 'input',
      label: 'name',
      idField: 'name',
      defaultValue: props?.unit?.name,
      required: true,
    },

    // {
    //     id: 4,
    //     type: 'select',
    //     label: 'update',
    //     idField: 'forUpdate',
    //     defaultValue: props?.unit?.forUpdate,
    //     options: props?.options?.forUpdate,
    // },
    {
      id: 5,
      type: 'input',
      label: 'mobile_no',
      idField: 'mobileNo',
      defaultValue: props?.unit?.mobileNo,
    },
    {
      id: 6,
      type: 'input',
      label: 'tel',
      idField: 'tel',
      defaultValue: props?.unit?.tel,
    },
    {
      id: 7,
      type: 'select',
      label: 'update_calls',
      idField: 'callUpdate',
      defaultValue: props?.unit?.callUpdate,
      options: props?.options?.callUpdate,
    },
  ]

  return (
    <Card
      className='menu-drawer w-full h-max bg-Lightbg dark:bg-cardbgDark shadow-box_shadow dark:shadow-none pb-2 pt-2 overflow-x-hidden'
      dir='rtl'
    >
      <div className='header w-full flex justify-between items-center pb-4'>
        <p className='text-xl font-bold'> {t('custom_information')}</p>
      </div>
      <CardContent className='w-full min-w-max overflow-x-auto' dir='rtl'>
        <FormFields
          fields={fieldsData}
          isDisabled={isDisabled}
          handleChange={props.handleChange}
          section={props.section}
        />
      </CardContent>
    </Card>
  )
}
