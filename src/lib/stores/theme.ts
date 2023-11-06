import {type Writable, writable} from "svelte/store";
import type {ThemeConfig} from "$lib/themes/ThemeConfig.ts";

const store: Writable<ThemeConfig> = writable<ThemeConfig>();

export default store;
