'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'

import AppLogin from './components/login'
import Main from '@/app/components'
import type { IMainProps } from '@/app/components'

const App: FC<IMainProps> = ({
  params,
}: any) => {
  const [token, setToken] = useState<string>('')
  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem('token')
    setToken(item)
  }, [])
  return (
    token
      ? (
        <Main params={params} />
      )
      : (<AppLogin />)
  )
}

export default React.memo(App)
