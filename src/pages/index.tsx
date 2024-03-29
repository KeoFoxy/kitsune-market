import { useState, useEffect } from "react";
import { Button, HTag, Tag, P, Rating } from "../../components";
import { withLayout } from "../../layout/Layout";

function Home() {

  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <HTag tag='h1'>Title</HTag>
      <Button appearance="primary" arrow="right" >Button</Button>
      <Button appearance="ghost" arrow="down">Ghost</Button>
      <P size="l">Loren Ipsum</P>
      <P>Loren Ipsum Medium</P>
      <P>Loren Ipsum Small</P>
      <Tag size="s" color='green'>10000</Tag>
      <Tag size='m' color='red'> Red</Tag>
      <Tag color="gray"> Grey</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="ghost">Ghost</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  )
}

export default withLayout(Home);
