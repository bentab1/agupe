import React from 'react'
import { About, AddCard, NavBar, PayBill, Theme, TransactionCategory } from './components'
import { AgupePay } from './container'
function App() {
  return (
    <div>
      <About/>
      <NavBar/>
      <PayBill/>
      <AddCard/>
      <AgupePay/>
      <Theme/>
      <TransactionCategory/>
    </div>
  )
}

export default App
