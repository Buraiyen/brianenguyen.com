<script setup>
const { sayHi } = useUtils();
import {ContactForm} from '#components'

sayHi();

useHead({
  title: 'Contact | BEN',
  meta: [
    {
      name: 'description',
      content: "Reach out to me for any inquiries, services, or just to say hello."
    }
  ]
})
</script>

<template>
  <div>
    <UiJumbotron
      jumbotronTitle="Contact"
      src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1639358227/BEN_Website/jumbotron/BEN_weekofwelcome_dtbkcj.jpg"
      srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1639358227/BEN_Website/jumbotron/BEN_weekofwelcome_dtbkcj.jpg"
    />
    <NuxtLayout>
      <ContactForm />
      <UiCd to="/" />
    </NuxtLayout>
  </div>
</template>
