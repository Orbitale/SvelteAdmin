import {type Readable, type Writable, writable} from "svelte/store";
import type {AdminConfig} from "./types";

const config: Writable<AdminConfig> = writable({
    head: {
        brandName: '',
        appName: '',
    }
});

export const configStore: Readable<AdminConfig> & {
    setAppName: (name: string) => void,
    setBrandName: (name: string) => void
} = {
    subscribe: config.subscribe,
    setBrandName: (name: string) => config.update((config: AdminConfig) => {
        config.head.brandName = name;
        return config;
    }),
    setAppName: (name: string) => config.update((config: AdminConfig) => {
        config.head.appName = name;
        return config;
    })
};
