export const useThemeCustomizer = defineStore("ThemeCustomizer", {
  state: () => ({
    isExpand: false
  }),

  actions: {
    setDrawer () {
      this.isExpand = !this.isExpand;
    }
  }
});
