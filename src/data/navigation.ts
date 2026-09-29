export type NavItem = {
  label: string
  href: string
}

// Shared by the desktop/mobile header menu and the footer link list.
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Suji', href: '#about' },
  { label: 'Academy', href: '#academy' },
  { label: 'Classes', href: '#classes' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export type BottomNavItem = {
  label: string
  href: string
  icon: 'home' | 'classes' | 'gallery' | 'contact'
}

// A tighter subset for the fixed mobile bottom navigation bar.
export const bottomNavItems: BottomNavItem[] = [
  { label: 'Home', href: '#home', icon: 'home' },
  { label: 'Classes', href: '#classes', icon: 'classes' },
  { label: 'Gallery', href: '#gallery', icon: 'gallery' },
  { label: 'Enquire', href: '#contact', icon: 'contact' },
]
