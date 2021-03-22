import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import legacy from'@vitejs/plugin-legacy';

/* 路径方法 */
const pathResolver = (pathStr: string): string => {
	return resolve(__dirname, '.', pathStr);
};

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': pathResolver('./src'), // 设置通用路径
		},
	},
	server: {
		port: 8182, //启动端口
		cors: true, // 为开发服务器配置 CORS
		open: false, // 默认是否代开浏览器,默认启用
		https: false, // 禁止启用 TLS + HTTP/2
		proxy: {
			'/api': {
				target: 'http://',
				changeOrigin: true,
				ws: false, // 禁止使用 websorcket
				secure: false, // 禁止验证SSL证书
				ignorePath: true, // 忽略传入请求的代理路径
			},
		},
	},
	build: {
		terserOptions: {
			safari10 : true, // 解决safari10混淆后报错问题
			compress: {
				keep_infinity: true, // 防止无限压缩
				drop_console: true,  // 清除 console.log
				drop_debugger: true, // 清除 debugger
			},
		},
		brotliSize: false, // 禁止压缩大小报告，提高构建性能
		chunkSizeWarningLimit: 1200  // chunk 大小警告的限制（以 kbs 为单位）。
	},
	plugins: [
		legacy({ targets: ['defaults', 'not IE 11'] }),
		vue(),
	],
	css: {
		preprocessorOptions: {
			scss: {
        		additionalData: `$injectedColor: orange;`
      		}
		},
	},
});
