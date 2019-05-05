// App.vue

<template>
  <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/approvals'>Approvals</router-link>
        <router-link to='/login'>Login</router-link>
            <el-button @click="goTo">Go to ID</el-button>
    <el-input placeholder="Please input" v-model="input"></el-input>
    </nav>
    <ul class="posts">
      <li
        v-for="post in posts"
        :key="post.title"
        class="post-item"
      >
          <h1>{{ post.title }}</h1>
      </li>
    </ul>
    <router-view />
  </div>
</template>


<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  data () {
    return {
      input: 'hello'
    }
  },
  methods: {
    goTo () {
      console.log('going to', this.input, this.$router)
      this.$router.push({name: 'approvalItem', params:{id: this.input}})
    },
    startHacking () {
      this.$notify({
        title: 'It works doest it!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}

.page-logo {
  width: 230px;
}

 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>




