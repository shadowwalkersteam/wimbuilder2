patch_name = "我的菜单";

if ($app_host_lang == $lang) {
    $patches_var['i18n.restart_explorer_item'] = '重启桌面进程';
}

patch_i18n = {
    "Add Restart Explorer desktop menu:":"添加 重启桌面进程 菜单:",
    "Restart Explorer":$patches_var['i18n.restart_explorer_item'],
    "Always show the Open Command Prompt Here extended menu item":"总是显示 打开命令提示符 扩展菜单"
}
