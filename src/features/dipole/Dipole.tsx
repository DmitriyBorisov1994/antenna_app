import React from 'react'
import { useAppSelector } from '../../app/hooks'
import DipoleCard from '../../components/DipoleCard'

const Dipole: React.FC = () => {

   const dipoleParameters = useAppSelector((state) => state.dipole)

   return (
      <DipoleCard dipoleParameters={dipoleParameters} />
   )
}

export default Dipole