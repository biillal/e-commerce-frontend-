import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Produitlimit from './container/Produitlimit'

function HomePages() {
  return (
    <MainLayout>
        <Hero/>
        <Produitlimit/>
    </MainLayout>
  )
}

export default HomePages
