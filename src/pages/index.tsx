import { Button, HTag, Tag, P } from "../../components";

export default function Home() {
  return (
    <>
      <HTag tag='h1'>Text</HTag>
      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
      <P size="l">Loren Ipsum</P>
      <P>Loren Ipsum Medium</P>
      <P>Loren Ipsum Small</P>
      <Tag size="s" color='green'>10000</Tag>
      <Tag size='m' color='red'> Red</Tag>
      <Tag color="gray"> Grey</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="ghost">Ghost</Tag>
    </>
  )
}
