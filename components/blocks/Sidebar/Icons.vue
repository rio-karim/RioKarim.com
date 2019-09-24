<template lang="html">
  <div
    class="SidebarIcon d-flex justify-content-center align-items-center"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <template v-if="type === 'home'">
      <span :class="{ hidden: !hover }" class="absolute true-center">HOME</span>
      <home-icon
        class="SidebarIcon__svg"
        :class="{ 'SidebarIcon__svg--hidden': hover }"
      />
    </template>
    <template v-else-if="type === 'about'">
      <span :class="{ hidden: !hover }" class="absolute true-center"
        >ABOUT</span
      >
      <about-icon
        class="SidebarIcon__svg"
        :class="{ 'SidebarIcon__svg--hidden': hover }"
      />
    </template>
    <template v-if="type === 'skills'">
      <span :class="{ hidden: !hover }" class="absolute true-center"
        >SKILLS</span
      >
      <skills-icon
        class="SidebarIcon__svg"
        :class="{ 'SidebarIcon__svg--hidden': hover }"
      />
    </template>
    <template v-if="type === 'portfolio'">
      <span :class="{ hidden: !hover }" class="absolute true-center"
        >MY WORK</span
      >
      <portfolio-icon
        class="SidebarIcon__svg"
        :class="{ 'SidebarIcon__svg--hidden': hover }"
      />
    </template>
    <template v-if="type === 'contact'">
      <span :class="{ hidden: !hover }" class="absolute true-center"
        >CONTACT</span
      >
      <contact-icon
        class="SidebarIcon__svg"
        :class="{ 'SidebarIcon__svg--hidden': hover }"
      />
    </template>
  </div>
</template>

<script>
import HomeIcon from '~/components/svg/house.svg'
import AboutIcon from '~/components/svg/avatar.svg'
import SkillsIcon from '~/components/svg/electron.svg'
import ContactIcon from '~/components/svg/chat-balloon.svg'
import PortfolioIcon from '~/components/svg/portfolio.svg'

export default {
  components: {
    HomeIcon,
    AboutIcon,
    SkillsIcon,
    ContactIcon,
    PortfolioIcon
  },
  props: {
    type: {
      type: String,
      default: 'home',
      required: false
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
.SidebarIcon {
  height: 100%;
  width: 100%;
  position: relative;
  &__svg {
    height: 22px;
    width: auto;
    transition: opacity 0.2s ease-in-out;
    &--hidden {
      opacity: 0;
    }
  }
  span {
    transition: opacity 0.2s ease-in-out;
    white-space: nowrap;
    &.hidden {
      opacity: 0;
    }
  }
  span:hover,
  a:hover {
    text-decoration: none !important;
  }
}
</style>
