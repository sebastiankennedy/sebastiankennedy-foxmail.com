import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'

const directives = {
    validator,
    dropdown
}

// 循环注册所有指令
for (const [key, value] of Object.entries(directives)) {
    Vue.directive(key, value)
}