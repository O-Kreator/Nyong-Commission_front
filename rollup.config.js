import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import sveltePreprocess from 'svelte-preprocess';
import alias from '@rollup/plugin-alias';
import includePaths from 'rollup-plugin-includepaths';
import svelteSVG from 'rollup-plugin-svelte-svg';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const replaceOptions = {
	'process.env.URL_CDN': process ? process.env.URL_CDN : '`images/arts`'
};

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
	},
	defaults: {
		style: 'scss'
	},
  postcss: {
    plugins: [require('autoprefixer')],
  },
});

const aliasOptions = {
	entries: [
		{find: '_components', replacement: 'src/components'},
		{find: '_styles', replacement: 'src/styles'},
		{find: '_services', replacement: 'src/styles'},
		{find: '_stores', replacement: 'src/stores'},
		{find: '_static', replacement: 'static'},
		{find: '_locales', replacement: '_locales'}
	]
};

const includePathOptions = {
	include: {},
	paths: ['src'],
	external: [],
	extensions: ['.js', '.ts', '.html', '.svelte'],
}

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...replaceOptions
			}),
			svelte({
				compilerOptions: {
					dev,
					hydratable: true
				},
				onwarn: (warning, handler) => {
					const {code, frame} = warning;
					if (code === 'css-unused-selector')
						return;
					handler(warning);
				},
				preprocess
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			alias(aliasOptions),
			includePaths(includePathOptions),
			svelteSVG({dev}),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...replaceOptions
			}),
			svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false,
				preprocess
			}),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/',
				emitFiles: false // already emitted by client build
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			alias(aliasOptions),
			includePaths(includePathOptions),
			svelteSVG({generate: 'ssr', dev}),
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

		preserveEntrySignatures: 'strict',
		onwarn
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				...replaceOptions
			}),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};
