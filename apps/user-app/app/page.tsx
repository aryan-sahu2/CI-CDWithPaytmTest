import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from './lib/auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession(authOptions)
  if(session?.user){
    redirect('/dashboard')
  } else{
    redirect('/api/auth/signin')
  }
}
