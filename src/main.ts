import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)


app.use(createVuestic({
    config: {
        colors:{
            presets:{
                light:{
                    primary: "#0D6E6E",
                    secondary: "#666E75",
                    success: "#3D9209",
                    info: "#4a9d9c",
                    danger: "#FF3D3D",
                    warning: "#ffe0c8",
                    backgroundPrimary: "#f5f5f5",
                    backgroundSecondary: "#FFFFFF",
                    backgroundElement: "#dbdcdc",
                    backgroundBorder: "#DEE5F2",
                    textPrimary: "#262824",
                    textInverted: "#FFFFFF",
                    shadow: "#bfbfbf",
                    focus: "#49A8FF",
                    transparent: "rgba(0, 0, 0, 0)",
                    backgroundLanding: "#f4f9fc",
                    backgroundLandingBorder: "rgba(155, 179, 206, 0.8)"
                }
                
            }
        }
    }
}));
app.mount('#app')
