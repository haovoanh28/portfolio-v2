<template>
  <div class="blog-sidebar">
    <div class="sidebar-search">
      <div class="sidebar-title fw-700">search</div>
      <BaseInput placeholder="Search ... " hasIcon iconName="search" />
    </div>
    <div class="sidebar-categories">
      <div class="sidebar-title fw-700">categories</div>
      <ul class="cate-list">
        <li v-for="cate in categories" :key="cate">
          <v-icon name="angle-double-right" />
          <span class="text-muted">{{ cate }}</span>
        </li>
      </ul>
    </div>
    <div class="content-placeholder" v-if="isLoading || pending">
      <content-placeholders
        v-for="index in 3"
        :key="`sidebar-placeholder-${index}`"
        :animated="!$device.isMobile"
      >
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="3" />
      </content-placeholders>
    </div>
    <div class="sidebar-recent_post" v-else>
      <p class="sidebar-title fw-700">Recent Post</p>
      <div class="post" v-for="post in posts" :key="`recent-post-${post._id}`">
        <BaseOverviewPost :post="post" />
      </div>
    </div>
    <div class="sidebar-archives">
      <div class="sidebar-title fw-700">archives</div>
      <ul class="cate-list">
        <li
          v-for="(archive, index) in archives"
          :key="`archive-${archive}-${index}`"
        >
          <v-icon name="angle-double-right" />
          <span class="text-muted">{{ archive }}</span>
        </li>
      </ul>
    </div>
    <div class="sidebar-tags">
      <p class="sidebar-title fw-700">tags</p>
      <BaseTag v-for="tag in tags" :key="tag" :tag="tag" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['technology', 'popular', 'programming', 'share'],
      archives: ['May 2021', 'August 2021', 'August 2021', 'August 2021'],
      tags: ['frontend', 'backend', 'javascript', 'html', 'css', 'vuejs'],
    }
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    pending: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-sidebar {
  background-color: #fff;
  align-self: flex-start;
  padding: 2.4rem;

  & > div {
    & > * {
      font-size: inherit;
      font-family: inherit;
    }
  }

  & > div:not(:first-child) {
    margin-top: 3.5rem;
  }
}

.sidebar-title {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.4rem !important;
  margin-bottom: 1.2rem;
}

.sidebar-categories,
.sidebar-archives {
  .cate-list {
    list-style-type: none;

    li {
      font-size: 1.4rem;
      text-transform: capitalize;
      display: flex;
      align-items: center;
      cursor: pointer;
      & > * {
        font-size: inherit;
        color: inherit;
        font-family: inherit;
      }

      svg {
        width: 10px;
        height: 10px;
        color: var(--color-muted);
      }

      span {
        margin-left: 0.5rem;
      }
    }

    li:first-child {
      padding-bottom: 0.5rem;
    }

    li:not(:first-child) {
      padding: 0.5rem 0;
    }
  }
}

.sidebar-recent_post {
  .sidebar-title {
    text-transform: uppercase;
  }
}

.vue-content-placeholders:not(:last-of-type) {
  margin-bottom: 3rem;
}
</style>