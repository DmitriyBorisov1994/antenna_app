import { getCalculationData } from './mathCalculations';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DipoleState {
   freq: number,
   waveLength: number | null,
   antennaLength: number | null,
   lengthRatio: number,
   normalPoins: number[] | null
}

const initialState: DipoleState = {
   ...getCalculationData(200, 1.5)
}

export const dipoleSlice = createSlice({
   name: 'dipole',
   initialState,
   reducers: {
      calculateParameters: {
         reducer: (state, action: PayloadAction<DipoleState>) => {
            state.freq = action.payload.freq
            state.waveLength = action.payload.waveLength
            state.antennaLength = action.payload.antennaLength
            state.lengthRatio = action.payload.lengthRatio
            state.normalPoins = action.payload.normalPoins
         },
         prepare: (freq: number, lengthRatio: number) => {
            return {
               payload: {
                  ...getCalculationData(freq, lengthRatio)
               }
            }
         }
      }
   }
})

export const { calculateParameters } = dipoleSlice.actions

export default dipoleSlice.reducer