---
aside: false
---

# About TrainLink

TrainLink is currently maintained by Matt ([matt-vdv](https://github.com/matt-vdv) on GitHub) under the [TrainLink Organisation](https://github.com/trainlink-org).

The TrainLink project was started in 2020 to come up with a way to create a easy to use, easy to modify framework from which apps and websites could be built. Another key aim of TrainLink was to support as many platforms as possible, rather than limiting it to mobile apps, for example.

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/matt-vdv.png',
    name: 'Matt',
    title: 'matt-vdv',
    links: [
      { icon: 'github', link: 'https://github.com/matt-vdv' },
    ]
  },
]
</script>

# Our Team

<VPTeamMembers size="small" :members="members" />
