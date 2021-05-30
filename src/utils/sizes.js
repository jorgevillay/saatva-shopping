const sizes = {
  desktopStart: '1110px',
  get tabletEnd() {
    return `${parseInt(this.desktopStart) - 1}px`
  }
}

export default sizes;
