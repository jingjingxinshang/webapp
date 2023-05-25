'use client'
import type { FC } from 'react'
import { useState } from 'react'
import { DEFAULT_VALUE_MAX_LEN } from '@/config'

const AppLogin: FC = () => {
  const [inputs, setInputs] = useState<string>('')
  const enterToken = () => {
    localStorage.setItem('token', inputs)
    window.location.reload()
  }
  return (
    <div className='w-full bg-red h-full'>
      <div className='tablet:flex tablet:!h-9 mobile:space-y-2 tablet:space-y-0 mobile:text-xs tablet:text-sm' >
        <label className={'flex-shrink-0 flex items-center mobile:text-gray-700 tablet:text-gray-900 mobile:font-medium pc:font-normal '}>Auth Token</label>
        <input
          placeholder={'请输入 Auth Token'}
          value={inputs || ''}
          onChange={(e) => { setInputs(e.target.value) }}
          className={'w-full flex-grow py-2 pl-3 pr-3 box-border rounded-lg bg-gray-50'}
          maxLength={DEFAULT_VALUE_MAX_LEN}
        />
        <button className='w-[50px] h-[30px]' onClick={enterToken}>登录</button>
      </div>
    </div>
  )
}

export default AppLogin
