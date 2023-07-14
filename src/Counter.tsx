"use client"
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { counterActions } from './store/slice/counterSlice'
const CounterView = () => {
    const dispatch = useDispatch()
    const CounterValue=useSelector((state:RootState)=>state.counterSlice.value)
        
    const Increment = () => {
        dispatch(counterActions.increment())
    }
    const Decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div className="flex justify-center my-7 gap-x-4">
            <button className='px-4 py-2 bg-red-400 text-white rounded-sm  my-12'  onClick={Increment}>Increment</button>
            <div className="">Counter Value {CounterValue}</div>
            <button className='px-4 py-2 bg-red-400 text-white rounded-sm' onClick={Decrement}>Decrement</button>

        </div>
    )
}
export default CounterView