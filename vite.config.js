import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,//porta padrão para react/ porta do servidor
    host:true,// fazer host se nn ele fica trabahando local em u servidor local/ habilita o acesso externo
    open: true,//abre o navegador automaticamente
  },
})
