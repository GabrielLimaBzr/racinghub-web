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
                    primary: "#3d8b8b",
                    secondary: "#0D6E6E",
                    success: "#3D9209",
                    info: "#4a9d9c",
                    danger: "#FF3D3D",
                    warning: "#ffe0c8",
                    backgroundPrimary: "#f2f7f7",
                    backgroundSecondary: "#FFFFFF",
                    backgroundElement: "#dbdcdc",
                    backgroundBorder: "#DEE5F2",
                    textPrimary: "#262824",
                    textInverted: "#FFFFFF",
                    shadow: "rgba(0, 0, 0, 0.12)",
                    focus: "#49A8FF",
                    transparent: "rgba(0, 0, 0, 0)",
                    backgroundLanding: "#f4f9fc",
                    backgroundLandingBorder: "rgba(155, 179, 206, 0.8)"
                },
                dark: {
                    primary: "#3d8b8b",
                    secondary: "#0D6E6E",
                    success: "#3D9209",
                    info: "#4a9d9c",
                    danger: "#FF3D3D",
                    warning: "#ffe0c8",
                    backgroundPrimary: "#0D1F2D",
                    backgroundSecondary: "#253542",
                    backgroundElement: "#5c6a78",
                    backgroundBorder: "#354656",
                    textPrimary: "#ececec",
                    textInverted: "#262824",
                    shadow: "rgba(255, 255, 255, 0.12)",
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
