import {useContext} from 'react'
import { getBlockContext } from '../utils/context'

export const useBlock = ()=> useContext(getBlockContext());