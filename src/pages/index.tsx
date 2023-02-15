import { Button, HTag } from "../../components";

export default function Home() {
  return (
    <>
      <HTag tag='h1'>Text</HTag>
      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
    </>
  )
}
