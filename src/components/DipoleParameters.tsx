import React from 'react'
import { List } from 'antd';
type DipoleParametersProps = {
   dipoleParameters: object
}

const DipoleParameters: React.FC<DipoleParametersProps> = ({ dipoleParameters }) => {

   const measUnit = (meas: string) => {
      let measUnitstr = ''
      switch (meas) {
         case "Частота":
            measUnitstr = 'МГц'

            break;
         case "Длина волны":
            measUnitstr = 'См'

            break;

         case "Длина антенны":
            measUnitstr = 'См'

            break;

         default:
            break;
      }
      return measUnitstr
   }

   const listFromObj = (obj: any) => {
      let list = []
      for (let key in obj) {
         list.push(<List.Item>{key}: {obj[key]} {measUnit(key)}</List.Item>)
      }
      return list
   }

   return (
      <List itemLayout="horizontal"
         dataSource={listFromObj(dipoleParameters)}
         renderItem={(item) => item}
      />
   )
}
export default DipoleParameters