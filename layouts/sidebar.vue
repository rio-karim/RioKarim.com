<template lang="html">
  <div class="Sidebar d-flex flex-column fixed">
    <div class="Sidebar-item"></div>
    <div class="Sidebar-item  d-flex align-items-center">
      <nav class="Sidebar-item__list">
        <li class="Sidebar-item__list-item">
          <nuxt-link to="/" class="Sidebar-item__list-item-link"
            ><sidebar-icon type="home"
          /></nuxt-link>
        </li>
        <li class="Sidebar-item__list-item">
          <nuxt-link to="/about" class="Sidebar-item__list-item-link"
            ><sidebar-icon type="about"
          /></nuxt-link>
        </li>
        <li class="Sidebar-item__list-item">
          <nuxt-link to="/skills" class="Sidebar-item__list-item-link"
            ><sidebar-icon type="skills"
          /></nuxt-link>
        </li>
        <li class="Sidebar-item__list-item">
          <nuxt-link to="/gallery" class="Sidebar-item__list-item-link"
            ><sidebar-icon type="portfolio"
          /></nuxt-link>
        </li>
        <li class="Sidebar-item__list-item">
          <nuxt-link to="/contact" class="Sidebar-item__list-item-link"
            ><sidebar-icon type="contact"
          /></nuxt-link>
        </li>
      </nav>
    </div>
    <div class="Sidebar-item"></div>
  </div>
</template>

<script>
import SidebarIcon from '~/components/blocks/Sidebar/Icons'
export default {
  components: {
    SidebarIcon
  }
}
</script>

<style lang="scss" scoped>
.Sidebar {
  min-width: 60px;
  width: 60px;
  max-width: 60px;
  height: 100vh;
  background: $c-menu;
  &-item {
    flex: 1;
    &:last-child,
    &:first-child {
      max-height: 200px;
    }
    &__list {
      width: 100%;
      &-item {
        height: 60px;
        width: 100%;
        &-link {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
  a {
    color: $c-primary;
    font-size: $f-nav;
    &:hover {
      text-decoration: none !important;
    }
  }
  &::after {
    background: transparent;
    content: '</html>';
    position: absolute;
    bottom: 3%;
    left: 6%;
    width: 50px;
    color: #595959;
    font-style: italic;
    font-size: 16px;
    font-family: 'Dancing Script', cursive;
    letter-spacing: 3px;
  }
}
</style>
