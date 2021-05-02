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
    <div class="sidebar-recent_post">
      <p class="sidebar-title fw-700">Recent Post</p>
      <div class="post" v-for="post in posts" :key="`recent-post-${post._id}`">
        <div class="post-img">
          <img :src="post.bannerImg" alt="" loading="lazy" />
        </div>
        <div class="post-short">
          <p class="post-title fw-700">
            {{ post.title }}
          </p>
          <p class="post-createdAt text-muted">
            {{ post.createdAt }}
          </p>
        </div>
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
import { mapState } from 'vuex'

export default {
  data() {
    return {
      categories: ['technology', 'popular', 'programming', 'share'],
      archives: ['May 2021', 'August 2021', 'August 2021', 'August 2021'],
      tags: ['frontend', 'backend', 'javascript', 'html', 'css', 'vuejs'],
    }
  },
  computed: {
    ...mapState('post/get', ['posts']),
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

  .post {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 2rem;
    padding-bottom: 2rem;

    &-img {
      width: 100%;
      height: 15rem;
      overflow: hidden;
    }

    &-short {
      /* display: flex;
      flex-direction: column;
      justify-content: space-between; */
    }

    &-createdAt {
      font-size: 1.3rem;
      margin-top: 2rem;
    }

    img {
      border-radius: 1rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &:not(:last-child) {
      border-bottom: 1px solid rgba(238, 238, 238, 0.7);
      margin-bottom: 3.3rem;
    }
  }

  @include medium_device {
    .post {
      &-img {
        height: 20rem;
      }
    }
  }
}
</style>