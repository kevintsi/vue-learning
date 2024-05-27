import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = (err) => {
    console.error("An error occured : ", err)
}

app.mount("#app")