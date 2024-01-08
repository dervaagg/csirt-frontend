import { TypeAnimation } from 'react-type-animation';

export default function TypedText() {
  return (
    <TypeAnimation
      sequence={[
        'We produce food for Cat',
        1000,
        'Also food for Dog',
        1000,
      ]}
      wrapper="div"
      speed={10}
      style={{ fontSize: '25px', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}
