import { useDispatch } from 'react-redux'
import { AppDispatch } from '../state/store'

const useAppDispatch = () => useDispatch<AppDispatch>()

export default useAppDispatch
