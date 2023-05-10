import { Button, ScrollSection, Seo } from "@/components"
import { MainLayout } from "@/layouts"
import { Link } from "gatsby"
import React from "react"

const AboutPage = () => {
  return (
    <MainLayout smooth>
      <Seo />
      <Link to="/" className="my-32">
        <Button>back</Button>
      </Link>

      <div className="w-full max-w-4xl font-poppins">
        <h1 className=" text-xl font-bold mb-6">Locomotive Scroll Page</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum nisl massa,
          vitae sodales ante vulputate ut. Proin vel ante lacus. Quisque sollicitudin rutrum
          elementum. Nullam maximus imperdiet diam, sed aliquet velit semper et. Praesent lacinia,
          enim eu ultrices cursus, leo nisl pulvinar elit, non elementum metus velit eu est. Vivamus
          sit amet lectus vitae neque congue sollicitudin eget sit amet elit. Curabitur at vehicula
          tellus. Nulla pretium sapien auctor, mollis odio quis, rutrum nisl. Suspendisse potenti.
          Duis commodo vehicula nunc, sit amet ultricies ligula vulputate eget. Fusce mollis quam a
          aliquet viverra. Phasellus quis neque egestas, vestibulum risus vel, aliquet libero.
        </p>

        <p className="mb-4">
          Phasellus vulputate, quam non venenatis condimentum, ex ligula maximus lectus, at
          pellentesque sem arcu et magna. Vestibulum sed sagittis elit, pellentesque accumsan enim.
          Duis ultrices leo vitae risus fermentum facilisis. Sed condimentum non quam ac porta.
          Donec condimentum sollicitudin ligula sed hendrerit. Nulla id ultricies augue. Aenean eu
          nisl sit amet ante efficitur ullamcorper eget eu purus. Ut at neque et erat blandit
          rhoncus et nec mi. Donec lacus turpis, porta sed enim quis, tristique sagittis purus.
          Mauris eu consectetur nulla. Donec vel imperdiet magna, quis interdum nulla. Morbi sit
          amet mi orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris vel
          lacus commodo, porttitor dolor vel, sagittis urna. Maecenas finibus, diam eget laoreet
          luctus, urna dui dictum mi, at bibendum ipsum odio at leo.
        </p>

        <p className="mb-4">
          Cras blandit molestie accumsan. Mauris mollis tristique ipsum, non placerat ante luctus
          rhoncus. Praesent blandit, eros non bibendum auctor, odio magna ultrices mauris, vitae
          tristique ligula enim sit amet arcu. Integer ante massa, sodales quis cursus vel, aliquam
          eu eros. Nam velit nibh, consequat eu euismod vel, cursus sed turpis. Suspendisse mollis
          imperdiet risus. Sed congue congue rhoncus. Mauris quis arcu diam. Aliquam scelerisque,
          velit quis varius lacinia, diam leo blandit diam, ut luctus mi est a odio. Aenean
          tincidunt at sem non ultricies. Phasellus gravida enim varius odio varius convallis. Nam
          et lacus vel dolor tincidunt condimentum id et nisi.
        </p>

        <p className="mb-4">
          Curabitur vel faucibus elit. Praesent eget diam blandit, pulvinar lorem et, aliquet leo.
          Suspendisse placerat diam odio, in tincidunt nunc ornare nec. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam a aliquam eros,
          pulvinar aliquam arcu. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Integer tincidunt fermentum nulla vitae interdum.
          Pellentesque consequat nisi at augue tincidunt, vitae venenatis eros convallis. Integer
          sodales tempor suscipit. Praesent at sodales ligula, et pharetra dui. In hac habitasse
          platea dictumst. Quisque eget lorem euismod, tincidunt leo id, scelerisque velit. Nullam
          condimentum ornare lacinia. Donec vehicula tellus id est euismod laoreet. Suspendisse
          molestie molestie augue, quis ornare erat ullamcorper a.
        </p>
      </div>

      <ScrollSection className="mt-48 mb-96" />
    </MainLayout>
  )
}

export default AboutPage
