import React,{useState} from 'react'
import { Wheel } from 'react-custom-roulette'
const Spin = () => {
    const [mustSpin, setMustSpin] = useState(false);
    const data = [
        { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
        { option: '1', style: { backgroundColor: 'black' } },
        { option: '2' },
      ]
  return (
    <div>
        <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={0}
      data={data}
      backgroundColors={['#3e3e', '#df8']}
      textColors={['#ffffff']}
    />
    </div>
  )
}

export default Spin