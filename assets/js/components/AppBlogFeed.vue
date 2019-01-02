<template>
    <div>
        <transition-group name="blog-feed" tag="div" class="feed-items">
            <slot />
            <div class="feed-item" v-for="(post, i) in posts" :key="`post-${i}`">
                <div class="feed-item-content">
                    <div class="img-wrapper">
                        <img src="https://via.placeholder.com/250x200" alt="">
                    </div>
                    <p class="title">{{ post.title }}</p>
                </div>
            </div>
        </transition-group>

        <div class="load-more">
            <button class="btn btn-primary" v-if="moreAvailable" @click="loadMore">Load More</button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        posts: [],
        moreAvailable: true,
    }),
    methods: {
        loadMore() {
            this.posts.push(
                {
                    title: 'New Blog Post 1',
                },
                {
                    title: 'New Blog Post 2',
                },
                {
                    title: 'New Blog Post 3',
                },
            );

            this.moreAvailable = false;
        }
    }
}
</script>

