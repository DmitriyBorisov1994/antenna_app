import React, { useState } from 'react'
import { Card } from 'antd'
import DipoleForm from './DipoleForm';
import { DipoleState } from '../features/dipole/dipoleSlice';
import DipoleParameters from './DipoleParameters';
import DipoleDiagram from './DipoleDiagram';

type DipoleCardProps = {
   dipoleParameters: DipoleState
}

const DipoleCard: React.FC<DipoleCardProps> = ({ dipoleParameters }) => {

   const {
      freq,
      waveLength,
      antennaLength,
      lengthRatio,
      normalPoins
   } = dipoleParameters

   const tabList = [
      {
         key: 'dipoleDiagram',
         tab: 'Диаграмма направленнности',
      },
      {
         key: 'dipoleParameters',
         tab: 'Параметры',
      },
   ];

   const contentListNoTitle: Record<string, React.ReactNode> = {
      dipoleDiagram: <DipoleDiagram data={normalPoins} />,
      dipoleParameters: <DipoleParameters dipoleParameters={{ 'Частота': freq, "Длина волны": waveLength, "Длина антенны": antennaLength }} />,
   };

   const [activeTabKey, setActiveTabKey] = useState<string>('dipoleDiagram');

   const onTabChange = (key: string) => {
      setActiveTabKey(key);
   };

   return (
      <Card
         style={{ maxWidth: '768px', minWidth: '270px', width: '100%' }}
         title='Расчёт диполя'

      >
         <Card
            type="inner"
            tabList={tabList}
            onTabChange={(key) => {
               onTabChange(key);
            }}
         >
            {contentListNoTitle[activeTabKey]}
         </Card>
         <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Исходные данные для расчёта"
         >
            <DipoleForm formValues={{ freq, lengthRatio }} />
         </Card>


      </Card>
   )
}

export default DipoleCard