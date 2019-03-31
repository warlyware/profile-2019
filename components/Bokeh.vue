<template>
  <div>
    <div class="colorizer" />
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
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
$primary_colors: #719190 #8AB1B0 #418292 #4C96A8 #889B4A #A3B95A #F79A32 #FCAC51;

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
    opacity: random(50) / 230;
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

.colorizer {
  position: absolute;
  width: 100rem;
  height: 100rem;
  filter: blur(130px);
  top: 100%;
  left: 95%;
  border-radius: 50%;
  background: linear-gradient(135deg, #211A10, #342815);
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
