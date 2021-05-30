const sizes = {
  tabletStart: '481px',
  desktopStart: '769px',
  get mobileEnd() {
    return `${parseInt(this.tabletStart) - 1}px`
  },
  get tabletEnd() {
    return `${parseInt(this.desktopStart) - 1}px`
  }
}

export default sizes;
