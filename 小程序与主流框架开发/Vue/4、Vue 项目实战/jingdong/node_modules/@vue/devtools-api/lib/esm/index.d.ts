import { DevtoolsPluginApi } from './api';
import { PluginDescriptor } from './plugin';
export * from './api';
export * from './plugin';
export { PluginQueueItem } from './env';
export declare type SetupFunction<TSettings = any> = (api: DevtoolsPluginApi<TSettings>) => void;
export declare function setupDevtoolsPlugin<TSettings = any>(pluginDescriptor: PluginDescriptor, setupFn: SetupFunction): void;
