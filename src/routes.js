// routes.js

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import ApprovalList from './components/ApprovalList.vue';
import ApprovalItem from './components/ApprovalItem.vue';

const routes = [
    { path: '/', redirect: { name: "home" }},
    { name: 'home', path: '/home', component: Home, meta: {title: 'Home' }},
    { name: 'register', path: '/register', component: Register, meta: {title: 'Register' }},
    { name: 'approvals', path: '/approvals', component: ApprovalList, meta: {title: 'Approvals' }},
    { name: 'approvalItem', path: '/approvals/:id', component: ApprovalItem, props: true, meta: {title: 'Approval' }},
];

export default routes; 