import Tree from './tree';

export function formatTree(tree: Tree): string {
    if (!(tree instanceof Tree)) {
        return tree;
    }

    let result = tree.value;

    if (tree.children.length > 0) {
        result = '<table border="1"><thead><tr><th colspan="' + tree.children.length + '">' + result + '</th></tr></thead><tbody><tr>';

        for (const child of tree.children) {
            result += '<td style="vertical-align: top;">' + formatTree(child) + '</td>';
        }

        result += '</tr></tbody></table>';
    }

    return result;
}


