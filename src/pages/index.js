import { Button, Seo } from "@/components"
import { MainLayout } from "@/layouts"
import { Link } from "gatsby"
import React from "react"

const IndexPage = () => {
  return (
    <MainLayout>
      <Seo />
      <Link to="/about" className=" my-56">
        <Button>about</Button>
      </Link>
    </MainLayout>
  )
}

export default IndexPage
