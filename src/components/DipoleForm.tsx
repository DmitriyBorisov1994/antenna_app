import React, { useState } from 'react'
import { Button, Form, InputNumber } from 'antd';
import { calculateParameters } from '../features/dipole/dipoleSlice';
import { useAppDispatch } from '../app/hooks';

type DipoleFormProps = {
   formValues: {
      freq: number,
      lengthRatio: number
   }
}

const DipoleForm: React.FC<DipoleFormProps> = ({ formValues }) => {

   const [freq, setFreq] = useState(formValues.freq)
   const [lengthRatio, setLengthRatio] = useState(formValues.lengthRatio)

   const dispatch = useAppDispatch()

   return (
      <Form
         onFinish={() => {
            console.log('clicked')
            dispatch(calculateParameters(freq, lengthRatio))
         }}
      >
         <Form.Item>
            <InputNumber
               addonBefore='Частота'
               addonAfter='МГц'
               value={freq}
               onChange={(value) => {
                  if (value) setFreq(value)
               }}
            />
         </Form.Item>
         <Form.Item>
            <InputNumber
               addonBefore='Длина антенны'
               addonAfter={"от длины волны " + "(" + String.fromCharCode(11414) + ' , см)'}
               min={0.25}
               max={2}
               step={0.25}
               value={lengthRatio}
               onChange={(value) => {
                  if (value) setLengthRatio(value)
               }}
            />
         </Form.Item>
         <Form.Item>
            <Button type="primary" htmlType="submit">
               Рассчитать
            </Button>
         </Form.Item>
      </Form>
   )
}

export default DipoleForm