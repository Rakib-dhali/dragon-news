"use client"
import Marquee from 'react-fast-marquee'

const NewsMarquee = () => {
  return (
    <Marquee gradient={false} speed={50} direction="left" style={{ width: "100%" }}>
      Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
    </Marquee>
  )
}

export default NewsMarquee