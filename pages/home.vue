<template>
  <div class="wrapper">
    <!-- <div class="colorizer1" />
    <div class="circles">
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
      <div class="circle" />
    </div> -->
    <div class="name-left tracking-wide screen-edge text-white text-xl flex justify-center absolute min-h-screen pin-r pin-t shadow-lg">
      <h1 class="mx-2">
        {{ name }}
      </h1>
    </div>
    <div class="name-right tracking-wide screen-edge text-white text-xl flex justify-center absolute min-h-screen pin-l pin-t shadow-lg">
      <h1 class="mx-2">
        {{ name }}
      </h1>
    </div>
    <div class="tracking-wide screen-edge text-xl flex justify-center items-center absolute w-screen pin-t shadow-lg uppercase">
      <nuxt-link class="my-4" to="home">
        Proficiencies
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="code">
        Code
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="writing">
        Writing
      </nuxt-link>
      <div class="mx-8">
        |
      </div>
      <nuxt-link class="my-4" to="code">
        Contact
      </nuxt-link>
    </div>
    <div class="tracking-wide screen-edge text-xl flex justify-center items-center absolute w-screen pin-b shadow-lg uppercase">
      <a class="my-4" href="//github.com/warlyware" target="_blank">
        GitHub
      </a>
      <div class="mx-8">
        |
      </div>
      <a class="my-4" href="//twitter.com/warlyware" target="_blank">
        Twitter
      </a>
    </div>
    <div class="px-32 py-16 flex flex-col justify-center items-center text-white h-screen">
      <h2 class="self-center text-3xl uppercase mb-16">
        Proficiencies
      </h2>
      <div class="tracking-wide text-4xl uppercase ml--16">
        <div class="flex flex-wrap content-between text-center">
          <div v-for="proficiency in proficiencies"
          :key="proficiency"
          class="ml-16 flex-grow my-4 text-center">
            {{ proficiency }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ':: DAN WARD ::',
      proficiencies: [
        'React',
        'Vue',
        'Redux',
        'Vuex',
        'NgRx',
        'Nuxt',
        'Angular',
        'React Native',
        'TypeScript',
        'CSS',
        'Flexbox',
        'SASS',
        'LESS',
        'Responsive Design',
        'Advanced Layouts',
        'PostCSS',
        'Node',
        'Webpack',
        'Server Side Rendering',
        'Modern JavaScript',
        'D3',
        'Highcharts',
        'RxJS',
        'MongoDB',
        'Unit Testing',
        'Google Maps',
        'Grunt',
        'Gulp',
        'Tailwind CSS',
        'Git',
        'Agile',
        'Jira',
        'Technical Writing'
      ]
    }
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    drawBokeh() {
      const canvas = document.getElementById('canvas')
      const context = canvas.getContext('2d')
      const stars = 5
      const colorrange = [0, 60, 240]

      context.canvas.width = window.innerWidth + 300
      context.canvas.height = window.innerHeight + 300

      for (let i = 0; i < stars; i++) {
        const x = Math.random() * canvas.offsetWidth
        const y = Math.random() * canvas.offsetHeight
        const radius = Math.random() * 1.5
        const hue = colorrange[this.getRandom(0, colorrange.length - 1)]
        const sat = this.getRandom(50, 100)
        context.beginPath()
        context.arc(x, y, radius, 0, 360)
        context.fillStyle = 'hsl(' + hue + ', ' + sat + '%, 88%)'
        context.fill()
      }
    },
    mounted() {
      window.addEventListener('resize', this.drawBokeh)
    }
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
body {
  background: linear-gradient(to top left, #342815, 10%, #211a10 20%,  #211a10 50%, #211a10);
  height: 100vh;
  overflow: hidden;
}

$primary_colors: #719190 #8AB1B0 #418292 #4C96A8 #889B4A #A3B95A #F79A32 #FCAC51;

.ml--16 {
  margin-left: -4rem;
}
.screen-edge {
  background-color: RGBA(239, 242, 243, 0.02);
}
.name-right {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.name-left {
  h1 {
    opacity: 1;
  }
  background-color: RGBA(239, 242, 243, 0.02);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
}

#canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -11;
  animation: spin 300s linear infinite;
  transform-origin: 50% 50%;
}

.circle {
  position: absolute;
  border-radius: 50%;
}

@function create-palette() {
  $palette: ();
  @for $i from 1 through 5 {
    $palette: append(
        $palette,
        mix(
          nth(
            $primary_colors,
            random(length($primary_colors))),
            nth($primary_colors,
            random(length($primary_colors))),
            60%
          )
      );
  }
  @return $palette;
}
$palette: create-palette();

@each $color in $palette {
  $size: random(100) * 10 + px;
  .circle:nth-child(#{index($palette, $color)}){
    background: $color;
    box-shadow: 0 0 random(10) + px random(10) + px $color;
    top: random(50) + 0%;
    left: random(50) + 0%;
    width: $size;
    height: $size;
    opacity: random(100) / 300;
    animation: float#{index($palette, $color)} 125s infinite linear;
  }
}

@for $i from 1 through 5 {
  $movex: random(100) - 20 + px;
  $movey: random(400) - 300 + px;
  $movex2: random(200) - 50 + px;
  $movey2: random(400) - 100 + px;
  @keyframes float#{$i} {
    40% {
      transform: translateX($movex) translateY($movey);
    }
    80% {
      transform: translateX($movex2) translateY($movey2);
    }
  }
}

.colorizer1, .colorizer2, .colorizer3, .colorizer4 {
  position: absolute;
  width: 300px;
  height: 300px;
  filter: blur(130px);
}

.colorizer1 {
  top: 100%;
  left: 95%;
  border-radius: 50%;
  background: linear-gradient(135deg, #342815, #805dcd);
}
.colorizer2 {
  top: 20%;
  left: 70%;
  background: #63568C;
}
.colorizer3 {
  top: 80%;
  left: -15%;
  background: #2D0D34;
  filter: blur(80px);
  border-radius: 50%;
}
.colorizer4 {
  top: 20%;
  left: 35%;
  width: 100px;
  height: 100px;
  background: #bbdebc;
  filter: blur(80px);
  border-radius: 50%;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
