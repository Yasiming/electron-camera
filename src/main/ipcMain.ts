import { ipcMain, MenuItemConstructorOptions, Menu } from 'electron'

ipcMain.on('quit', () => {
  const template = [] as MenuItemConstructorOptions[]
  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})
