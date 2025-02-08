import {PresetConfigMutator, unistVisit, type HASTRoot, type RehypePluginFactory,} from 'rspress-plugin-devkit';
import type {RspressPlugin} from '@rspress/shared';

export function pluginMarkDownAutoSpace(): RspressPlugin {
    return {
        name: 'markdown-auto-space',
        markdown: {
            rehypePlugins: [[pluginInternal()]]
        },
    };
}

function pluginInternal(): RehypePluginFactory<void> {
    function insert_spacing(str:string) {
        var p1=/([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
        var p2=/([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
        return str.replace(p1, "$1 $2").replace(p2, "$1 $2")
    }

    return () => {
        return (tree: HASTRoot) => {
            unistVisit(tree, 'text', (node) => {
                node.value = insert_spacing(node.value)
            });
        };
    };
}