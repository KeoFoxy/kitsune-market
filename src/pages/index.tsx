import { Button, HTag } from "../../components";

export default function Home() {
  return (
    <>
      <HTag tag='h1'>Text</HTag>
      <Button appearance="primary" className="Super">Button</Button>
      <Button appearance="ghost">Ghost</Button>
    </>
  )
}
