import { Menu, Tray } from 'electron'
import path from 'path'
const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出程序', role: 'quit' },
    { type: 'separator' }
  ])
  tray.setToolTip('摄像头')
  tray.setContextMenu(contextMenu)
}

export { createTray }
