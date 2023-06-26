import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalProvid } from './context/GlobalState';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/transactions/TransactionList';
import { TransactionForm } from './components/transactions/TransactionForm';
import { ExpenseChart } from './components/ExpenseChart';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvid>
      <div className='bg-neutral-950 text-white h-screen flex justify-center items-center'>
        <div className='w-2/5 flex justify-center items-center'>
          <div className='bg-neutral-800 p-10 rounded-md w-full'>
            <Header />
            <div className='flex flex-col md:flex-row justify-between gap-4'>
              <div className='flex-1'>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className='flex-1 flex flex-col'>
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvid>
  )
}
export default App