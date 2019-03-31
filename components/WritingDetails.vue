<template>
  <div class="px-8 md:px-32 py-16 flex flex-col justify-center items-center h-screen text-white">
    <h2 class="self-center text-3xl uppercase my-8 font-light">
      Writing
    </h2>
    <div class="relative w-full h-full overflow-hidden">
      <div
      class="tracking-wide md:text-xl uppercase absolute h-full w-full overflow-y-scroll flex flex-wrap">
        <div v-for="writing in writings"
        :key="writing.name"
        class="w-full lg:w-1/3 text-center p-4">
          <a class="bg-opaque hover:bg-alt-blue-2 hover:text-brown-dark leading-normal"
          :href="writing.url"
          target="_blank">
            {{ writing.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      writings: [
        {
          name: 'React Native Cookbook - Second Edition',
          url: '//www.packtpub.com/application-development/react-native-cookbook-second-edition'
        },
        {
          name: 'React Native: Adding Push Notifications to your App with Expo',
          url: 'https://levelup.gitconnected.com/react-native-adding-push-notifications-to-your-app-with-expo-8e4b659ddbfb'
        },
        {
          name: 'React Native: Implementing Browser-Based Authentication using Expo’s AuthSession Component',
          url: 'https://levelup.gitconnected.com/react-native-implementing-browser-based-authentication-using-expos-authsession-component-ffee25b50ae8'
        },
        {
          name: 'How to Create Custom HTML Markers on Google Maps',
          url: 'https://levelup.gitconnected.com/how-to-create-custom-html-markers-on-google-maps-9ff21be90e4b'
        },
        {
          name: 'Expo vs React Native CLI: A Guide to Bootstrapping New React Native Apps',
          url: 'https://levelup.gitconnected.com/expo-vs-react-native-cli-a-guide-to-bootstrapping-new-react-native-apps-6f0fcafee58f'
        },
        {
          name: 'Jumping Into a Web Development Career with an English Degree',
          url: 'https://levelup.gitconnected.com/jumping-into-a-web-development-career-with-an-english-degree-20d8bd9310f3'
        },
        {
          name: 'Twas a Dev’s Christmas: A Holiday Ode to the Open Source Community',
          url: 'https://levelup.gitconnected.com/twas-a-devs-christmas-a-holiday-ode-to-the-open-source-community-98014d850838'
        },
        {
          name: 'Angular... It’s You, Not Me.',
          url: 'https://levelup.gitconnected.com/angular-its-you-not-me-9e9232ad3bcd'
        },
        {
          name: 'A Brief History of CSS-in-JS: How We Got Here and Where We’re Going',
          url: 'https://levelup.gitconnected.com/a-brief-history-of-css-in-js-how-we-got-here-and-where-were-going-ea6261c19f04'
        },
        {
          name: 'The CSS Holy War & How To Think Beyond Dogma',
          url: 'https://levelup.gitconnected.com/the-css-holy-war-how-to-think-beyond-dogma-e2c67692d409'
        },
        {
          name: 'Refactoring Comments into Better Code',
          url: 'https://levelup.gitconnected.com/refactoring-comments-into-better-code-f17671bee0f6'
        },
        {
          name: 'Comment Your Code With Care',
          url: 'https://levelup.gitconnected.com/comment-your-code-with-care-e355f3de2b34'
        }
      ]
    }
  }
}
</script>
