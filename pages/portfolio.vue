<script setup>
const { sayHi } = useUtils();
sayHi();

useHead({
  title: 'Portfolio | BEN',
  meta: [
    {
      name: 'description',
      content: "View the various projects that I have worked on."
    }
  ]
});
</script>

<template>
  <div>
    <UiJumbotron
      jumbotronTitle="Portfolio"
      src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204060/BEN_Website/jumbotron/BEN_webdev_code.webp"
      srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1659204060/BEN_Website/jumbotron/BEN_webdev_code.webp"
    />
    <NuxtLayout>
      <UiSectionHeader
        title="My work"
        description="A collection of various websites that I have designed and developed"
      />
      <PortfolioProjectList />
      <UiCd to="/" />
    </NuxtLayout>
  </div>
</template>
