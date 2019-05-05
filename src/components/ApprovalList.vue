<template>
  <div>
    <el-button @click="goTo">Go to ID</el-button>
    <el-input placeholder="Please input" v-model="input"></el-input>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    title: 'Approval List',
    created () {
      console.log('created')
    },
    methods: {
      goTo () {
        console.log('going to', this.input, this.$router)
        this.$router.push({name: 'approvalItem', params:{id: this.input}})
      },
    },
    data() {
      return {
        input: '',
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>