<script lang="ts" setup>
import { ref } from 'vue'

async function getStarCount() {
  try {
    const response = await fetch(`https://ungh.cc/repos/zebra-ui/zebra-swiper`)

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }

    const data = await response.json()
    return data.repo.stars
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error)
    return null
  }
}

const starCount = ref<number>(0)

getStarCount().then((count) => {
  starCount.value = count
})
</script>

<template>
  <div class="zebra-card-home">
    <section id="hero" class="z-container">
      <div class="title">
        <AnimatedText
          text="A 3D carousel component library based on vue, customizing the carousel style you like"
          direction="down"
          :delay="0"
          tag="h2"
          class="text-top"
          :duration="2000"
          :column-gap="0.2"
        />
        <AnimatedText
          text="Carousel styles with rich effects for"
          last-word="Vue & Uniapp"
          direction="down"
          :delay="500"
          tag="h1"
          class="text-bottom"
        />
      </div>
      <AnimatedElement :delay="1000">
        <div class="animate-oprate">
          <a class="oprate-content" href="/guide/introduce">
            <svg
              width="1em"
              height="1em"
              class="content-svg"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 5.65273C5.25 4.79705 6.1674 4.25462 6.91716 4.66698L18.4577 11.0143C19.2349 11.4417 19.2349 12.5584 18.4577 12.9858L6.91716 19.3331C6.1674 19.7455 5.25 19.203 5.25 18.3474V5.65273Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Get Started
          </a>
          <a
            class="oprate-content content-right"
            v-if="starCount"
            href="https://github.com/zebra-ui/zebra-swiper"
            target="blank"
          >
            <div class="animate-button" v-if="starCount">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                class="content-svg"
                viewBox="0 0 1024 1024"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="currentColor"
                />
              </svg>
              <AnimatedCounter
                :delay="1250"
                :count="starCount"
                class="content-svg"
                style="margin-left: 10px"
              />
              <svg
                width="1em"
                height="1em"
                class="content-svg"
                style="margin-left: 10px"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </AnimatedElement>
      <AnimatedElement :delay="1250">
        <div class="button-group">
          <a class="button-group-item" href="/api/components">Components</a>
          <a class="button-group-item" href="/api/property">Propertys</a>
          <a class="button-group-item" href="/api/methods">Methods</a>
          <a class="button-group-item" href="/api/events">Events</a>
        </div>
      </AnimatedElement>
      <AnimatedElement :delay="1500">
        <DemoShow></DemoShow>
      </AnimatedElement>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.zebra-card-home {
  .z-container {
    padding-top: 1rem;

    .button-group {
      margin-top: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;

      .button-group-item {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--vp-c-gray-2);
        border-radius: 0.7rem;
        color: var(--vp-c-text);
        text-decoration: none;
        font-size: 16px;
        min-height: 2.8rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;
      }
    }

    .button-group-item:hover {
      background-color: var(--vp-custom-block-danger-text);
      color: var(--vp-c-bg);
    }

    .oprate-content {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--vp-custom-block-danger-text);
      border-radius: 0.7rem;
      color: var(--vp-c-bg);
      text-decoration: none;
      font-size: 22px;
      font-weight: bold;
      min-height: 3.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;

      .content-svg {
        font-size: 28px;
        font-weight: bold;
        margin-right: 10px;
      }
    }

    .content-right {
      background-color: var(--vp-c-bg);
      border: 1px solid var(--vp-c-gray-1);
      color: var(--vp-c-text-1);
    }

    .oprate-content:hover {
      background-color: var(--vp-c-text-2);
      color: var(--vp-c-bg);
    }

    .content-right:hover {
      background-color: var(--vp-custom-block-danger-text);
      color: var(--vp-c-bg);
    }

    .animate-oprate {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 3rem;
    }

    .animate-button {
      display: flex;
      align-items: center;
      font-weight: bold;
    }

    .title {
      max-width: 48rem;
      margin-left: auto;
      margin-right: auto;
    }

    .text-top {
      gap: 0rem 0.2rem;
      display: inline-flex;
      flex-wrap: wrap;
      letter-spacing: -0.025em;
      margin: 0;
      border-top: none;
      padding-top: 0;
      color: var(--vp-c-text-2);
      font-size: 1.15rem;
      line-height: 1.75rem;
    }

    .text-bottom {
      gap: 0rem 0.5rem;
      display: inline-flex;
      flex-wrap: wrap;
      font-weight: 700;
      margin-top: 1.5rem;
      letter-spacing: -0.05em;
    }

    @media (min-width: 1024px) {
      .text-bottom {
        font-size: 3.75rem;
        line-height: 1;
      }
    }

    @media (min-width: 768px) {
      .text-top {
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .text-bottom {
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (min-width: 768px) {
    .z-container {
      padding-top: 1rem;
    }
  }
}
</style>
