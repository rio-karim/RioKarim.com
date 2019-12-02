<template lang="html">
  <div class="SocialIcon">
    <template v-if="type === 'github'">
      <github-icon />
    </template>
    <template v-else-if="type === 'linkedin'">
      <linkedin-icon />
    </template>
  </div>
</template>

<script>
import GithubIcon from '~/components/svg/github-character.svg'
import LinkedinIcon from '~/components/svg/linkedin-logo.svg'

export default {
  components: {
    GithubIcon,
    LinkedinIcon
  },
  props: {
    type: {
      type: String,
      default: 'github',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
svg {
  height: 13px;
  width: auto;
}
</style>
