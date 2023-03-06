import useDarkModeImpl from '@fisch0920/use-dark-mode'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(false, {
    classNameDark: 'dark-mode',
    storageKey: 'isDarkMode'
  })

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
